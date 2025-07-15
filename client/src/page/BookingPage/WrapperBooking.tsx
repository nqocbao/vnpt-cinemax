import React, { useState, useEffect } from "react";
import BookingStepsTabs from "./BookingStepsTabs";
import SelectLocationAccordion from "./SelectLocationAccordion";
import SeatSelection from "./SeatSelection";
import ComboSelection from "./ComboSelection";
import PaymentSection from "./PaymentSection";
import { useMovies, useTheaters } from "@/components/hooks/useQuery";
import { useBooking } from "@/components/hooks/useBooking";
import { useSeats } from "@/components/hooks/useSeats";
import type { Movies } from "@/components/interface/movies";
import type { Theater } from "@/components/interface/theaters";
import type { BookingRequest } from "@/components/interface/tickets";
import AuthDialog from "@/components/custom/AuthDialog";
import SidebarBookingSummary from "./SidebarBookingSummary";
import { useNavigate } from "react-router-dom";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const COLS = ["12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];

const COMBOS = [
  {
    id: 1,
    name: "Capybara Set",
    desc: "Capybara lạc bước, dắt tay em về nào stars ơi, đừng quên 1 bắp ngọt và 1 nước size L tặng kèm nhé",
    price: 350000,
    img: "https://cdn.galaxycine.vn/media/2025/4/29/capybara-app-co-online-min_1745917429070.jpg",
  },
  {
    id: 2,
    name: "Combo 2 Big",
    desc: "Nhân đôi sự sảng khoái! Combo 2 gồm 1 bắp rang bơ lớn, 2 Pepsi cỡ lớn – tiết kiệm hơn 28,000!",
    price: 109000,
    img: "https://cdn.galaxycine.vn/media/2025/4/11/cinemunch-glx-special-combo--sala-1920x1320_1744354944957.jpg",
  },
  {
    id: 3,
    name: "Combo 2 Big Extra",
    desc: "Nhân đôi sự sảng khoái! Combo 2 gồm 1 bắp rang bơ lớn, 2 Pepsi cỡ lớn + 1 snack tuỳ chọn – tiết kiệm hơn 33,000!",
    price: 129000,
    img: "https://cdn.galaxycine.vn/media/2025/4/11/combo-2-big-extra-1920x1320_1744354872856.jpg",
  },
  {
    id: 4,
    name: "Combo Friends 1 Big",
    desc: "Chia sẻ niềm vui với bạn bè! Friend Combo 1 gồm 1 bắp rang bơ, 3 Pepsi mát lạnh và 1 món snack tự chọn – tiết kiệm hơn 52,000!",
    price: 149000,
    img: "https://cdn.galaxycine.vn/media/2025/4/11/friends-combo-1-1920x1320_1744354831910.jpg",
  },
  {
    id: 5,
    name: "Combo Friends 2 Big",
    desc: "Thêm bạn, thêm vui! Friend Combo 2 mang đến 2 bắp rang bơ, 4 Pepsi mát lạnh và 2 món snack tự chọn – tiết kiệm hơn 95,000!",
    price: 229000,
    img: "https://cdn.galaxycine.vn/media/2025/4/11/friends-combo-2-1920x1320_1744354854417.jpg",
  },
  {
    id: 6,
    name: "Combo 1 Big",
    desc: "Thỏa mãn cơn thèm với 1 phần bắp rang bơ thơm ngon và 1 Pepsi mát lạnh!",
    price: 89000,
    img: "https://cdn.galaxycine.vn/media/2025/4/11/combo-1-big-1920x1320_1744354783333.jpg",
  },
];

const DATES = [
  { label: "Chủ Nhật", value: "2025-07-06" },
  { label: "Hôm Nay", value: "2025-07-07" },
  { label: "Thứ Ba", value: "2025-07-08" },
];

const PAYMENT_METHODS = [
  {
    id: "onepay",
    label: "OnePay - Visa, Master, JCB,... / ATM / QR Ngân hàng / Apple Pay",
    logo: "https://cdn.galaxycine.vn/media/2024/9/27/logo-onepay500x500_1727411425335.png",
  },
  {
    id: "shopeepay",
    label: "Ví ShopeePay - Giảm 5K mỗi đơn khi thanh toán",
    logo: "https://cdn.galaxycine.vn/media/2022/4/29/shopee-pay_1651229746140.png",
  },
  {
    id: "momo",
    label: "Ví Điện Tử MoMo",
    logo: "https://cdn.galaxycine.vn/media/2020/10/20/momo-icon_1603203874499.png",
  },
  {
    id: "zalopay",
    label: "Zalopay - Bạn mới Zalopay nhập mã GIAMSAU - Giảm 50% tối đa 40k",
    logo: "https://cdn.galaxycine.vn/media/2024/7/10/zalopay_1720600308412.png",
  },
  {
    id: "payoo",
    label: "HSBC/Payoo - ATM/VISA/MASTER/JCB/QRCODE",
    logo: "https://cdn.galaxycine.vn/media/2020/10/20/hsbc-icon_1603203578522.png",
  },
  {
    id: "vnpay",
    label: "VNPAY",
    logo: "https://cdn.galaxycine.vn/media/2021/12/2/download_1638460623615.png",
  },
  {
    id: "fundiin",
    label: "Trả sau Fundiin",
    logo: "https://cdn.galaxycine.vn/media/2025/6/25/fundiin_1750821053227.png",
  },
];

interface BookingData {
  selectedMovie?: string;
  selectedCinema?: string;
  selectedDate?: string;
  selectedTime?: string;
}

interface WrapperBookingProps {
  bookingData: BookingData;
}

export default function WrapperBooking({ bookingData }: WrapperBookingProps) {
  const navigate = useNavigate();
  const { data: movies } = useMovies();
  const { data: theaters = [] } = useTheaters();
  const { bookTickets, loading: bookingLoading } = useBooking();
  const { getBookedSeatsByShowtime } = useSeats();
  const [soldSeats, setSoldSeats] = useState<{ row: string; col: string }[]>(
    []
  );
  const [selectedCity, setSelectedCity] = useState<string>(
    bookingData?.selectedCinema || ""
  );
  const [selectedMovie, setSelectedMovie] = useState<Movies | null>(() => {
    if (bookingData?.selectedMovie && movies) {
      const movieId = Number(bookingData.selectedMovie);
      const found = movies.find((m: Movies) => Number(m.id) === movieId);
      return found || null;
    }
    return null;
  });
  const [selectedShowtime, setSelectedShowtime] = useState<string>(
    bookingData?.selectedTime || ""
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    bookingData?.selectedDate || "2025-07-06"
  );
  const [selectedTheater, setSelectedTheater] = useState<string>(() => {
    if (bookingData?.selectedCinema && theaters.length > 0) {
      const found = theaters.find(
        (t: Theater) => t.location === bookingData.selectedCinema
      );
      return found ? found.name : "";
    }
    return "";
  });
  const [selectedShowtimeId, setSelectedShowtimeId] = useState<number | null>(
    null
  );
  const [selectDisplayAccord, setSelectDisplayAccord] = useState("theater");
  const [selectedTheaterId, setSelectedTheaterId] = useState<number | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState("step1");
  const [selectedSeats, setSelectedSeats] = useState<
    { row: string; col: string }[]
  >([]);
  const [comboCounts, setComboCounts] = useState<{ [id: number]: number }>({});
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("momo");
  const [hoveredSeat, setHoveredSeat] = useState<{
    row: string;
    col: string;
  } | null>(null);
  const [seatTimer, setSeatTimer] = useState(300);
  const [openSeatWarning, setOpenSeatWarning] = useState(false);
  const [seatWarningMessage, setSeatWarningMessage] = useState("");
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingCode, setBookingCode] = useState<string | null>(null);

  // console.log(bookingData);
  useEffect(() => {
    const fetchSoldSeats = async () => {
      if (selectedMovie && selectedTheaterId && selectedShowtimeId) {
        const data = await getBookedSeatsByShowtime(
          selectedMovie.id,
          selectedTheaterId,
          selectedShowtimeId
        );
        setSoldSeats(Array.isArray(data) ? data : []);
      } else {
        setSoldSeats([]);
      }
    };
    fetchSoldSeats();
  }, [selectedMovie, selectedTheaterId, selectedShowtimeId]);

  const cityList: string[] = Array.from(
    new Set((theaters as Theater[]).map((t: Theater) => t.location))
  ).filter(Boolean) as string[];

  const handleSelectSeat = (row: string, col: string) => {
    const seat = { row, col };
    if (soldSeats.some((s) => s.row === row && s.col === col)) return; // Không chọn ghế đã bán
    let newSeats;
    if (selectedSeats.some((s) => s.row === row && s.col === col)) {
      newSeats = selectedSeats.filter((s) => !(s.row === row && s.col === col));
    } else {
      newSeats = [...selectedSeats, seat];
    }
    setSelectedSeats(newSeats);
  };

  // Hàm kiểm tra đkien ghế
  function hasSingleEmptySeat(
    selectedSeats: { row: string; col: string }[],
    soldSeats: { row: string; col: string }[]
  ) {
    for (const row of ROWS) {
      // Tạo mảng trạng thái cho từng ghế trên hàng này
      const status = COLS.map((col) => {
        if (soldSeats.some((s) => s.row === row && s.col === col)) return 1; // đã bán
        if (selectedSeats.some((s) => s.row === row && s.col === col)) return 2; // đã chọn
        return 0; // trống
      });
      // Kiểm tra ghế lẻ ở giữa
      for (let i = 1; i < status.length - 1; i++) {
        if (
          status[i] === 0 &&
          (status[i - 1] === 1 || status[i - 1] === 2) &&
          (status[i + 1] === 1 || status[i + 1] === 2)
        ) {
          return true;
        }
      }
      // Kiểm tra ghế lẻ ở đầu hàng
      if (status[0] === 0 && (status[1] === 1 || status[1] === 2)) return true;
      // Kiểm tra ghế lẻ ở cuối hàng
      if (
        status[status.length - 1] === 0 &&
        (status[status.length - 2] === 1 || status[status.length - 2] === 2)
      )
        return true;
    }
    return false;
  }

  const handleNextStep = async () => {
    if (selectedTab === "step2") {
      if (hasSingleEmptySeat(selectedSeats, soldSeats)) {
        setSeatWarningMessage(
          "Việc chọn vị trí ghế của bạn không được để trống 1 ghế ở bên trái, giữa hoặc bên phải trên cùng hàng ghế mà bạn vừa chọn."
        );
        setOpenSeatWarning(true);
        return;
      }
      setSelectedTab("step3");
    } else if (selectedTab === "step3") {
      setSelectedTab("step4");
    } else if (selectedTab === "step4") {
      if (!selectedMovie || !selectedTheaterId || !selectedShowtimeId) {
        setBookingError("Thiếu thông tin cần thiết để đặt vé");
        return;
      }

      const bookingData: BookingRequest = {
        movieId: selectedMovie.id,
        theaterId: selectedTheaterId,
        showTimeId: selectedShowtimeId,
        userId: parseInt(localStorage.getItem("userId") || "1"),
        seats: selectedSeats,
        combos: Object.entries(comboCounts)
          .filter(([, count]) => count > 0)
          .map(([id, quantity]) => ({
            id: parseInt(id),
            quantity,
          })),
        totalPrice: calculateTotalPrice(),
        paymentMethod: selectedPayment,
        promoCode: promoCode || undefined,
      };

      const result = await bookTickets(bookingData);
      if (result?.success) {
        setBookingCode(result.bookingCode || null);
        setSelectedTab("step5");
      } else {
        setBookingError(result?.message || "Có lỗi xảy ra khi đặt vé");
      }
    } else if (selectedTab === "step5") {
      navigate("/");
    } else {
      setSelectedTab(
        selectedTab === "step1"
          ? "step2"
          : selectedTab === "step2"
          ? "step3"
          : selectedTab === "step3"
          ? "step4"
          : "step5"
      );
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;

    // Tính giá vé
    selectedSeats.forEach((seat) => {
      const isVip = isVipSeat(seat.row, seat.col);
      total += isVip ? 75000 : 50000;
    });

    // Tính giá combo
    Object.entries(comboCounts).forEach(([id, count]) => {
      const combo = COMBOS.find((c) => c.id === parseInt(id));
      if (combo) {
        total += combo.price * count;
      }
    });

    return total;
  };

  const handleChangeCombo = (id: number, delta: number) => {
    setComboCounts((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      return next;
    });
  };

  const steps = [
    { value: "step1", label: "Chọn phim / Rạp / Suất" },
    { value: "step2", label: "Chọn ghế", disabled: selectedTab === "step1" },
    {
      value: "step3",
      label: "Chọn thức ăn",
      disabled: ["step1", "step2"].includes(selectedTab),
    },
    {
      value: "step4",
      label: "Thanh toán",
      disabled: ["step1", "step2", "step3"].includes(selectedTab),
    },
    {
      value: "step5",
      label: "Xác nhận",
      disabled: ["step1", "step2", "step3", "step4"].includes(selectedTab),
    },
  ];

  // Hàm kiểm tra ghế VIP
  const isVipSeat = (row: string, col: string) => {
    const vipRows = ["E", "F", "G", "H"];
    const colNum = parseInt(col);
    return vipRows.includes(row) && colNum >= 3 && colNum <= 10;
  };

  useEffect(() => {
    if (["step3", "step4"].includes(selectedTab)) {
      if (seatTimer === 0) {
        setSelectedTab("overtime");
        return;
      }
      const timer = setInterval(() => {
        setSeatTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setSeatTimer(300);
    }
  }, [selectedTab, seatTimer]);

  // Cập nhật selectedTheaterId khi chọn rạp
  useEffect(() => {
    if (selectedTheater && theaters.length > 0) {
      const theater = theaters.find((t: Theater) => t.name === selectedTheater);
      if (theater) {
        setSelectedTheaterId(theater.id);
      }
    }
  }, [selectedTheater, theaters]);

  // Cập nhật selectedShowtimeId khi chọn suất chiếu
  useEffect(() => {
    if (selectedShowtime && selectedMovie && selectedTheaterId) {
      setSelectedShowtimeId(1);
    }
  }, [selectedShowtime, selectedMovie, selectedTheaterId]);

  // console.log(cityList);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mt-8 px-3 md:px-10 pb-10">
      <div className="flex-1 min-w-0 bg-white w-full rounded-lg shadow-md p-8">
        <BookingStepsTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          steps={steps}
        >
          {selectedTab === "step1" && (
            <SelectLocationAccordion
              cityList={cityList}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              movies={movies || []}
              selectedMovie={selectedMovie as Movies}
              setSelectedMovie={setSelectedMovie}
              theaters={theaters}
              selectedTheater={selectedTheater}
              setSelectedTheater={setSelectedTheater}
              selectedShowtime={selectedShowtime}
              setSelectedShowtime={setSelectedShowtime}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectDisplayAccord={selectDisplayAccord}
              setSelectDisplayAccord={setSelectDisplayAccord}
              DATES={DATES}
            />
          )}

          {selectedTab === "step2" && (
            <>
              <SeatSelection
                ROWS={ROWS}
                COLS={COLS}
                selectedSeats={selectedSeats}
                soldSeats={soldSeats}
                handleSelectSeat={handleSelectSeat}
                hoveredSeat={hoveredSeat}
                setHoveredSeat={setHoveredSeat}
                isVipSeat={isVipSeat}
              />
              <div className="flex gap-4 mt-4">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gray-300 mr-1 inline-block rounded border"></span>{" "}
                  Ghế đã bán
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-[#F1B4BB] mr-1 inline-block rounded border border-[#F1B4BB"></span>{" "}
                  Ghế đang chọn
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 border border-[#F1B4BB] mr-1 inline-block rounded"></span>{" "}
                  Ghế VIP
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 border mr-1 inline-block rounded"></span>{" "}
                  Ghế thường
                </div>
              </div>
            </>
          )}

          {selectedTab === "step3" && (
            <ComboSelection
              COMBOS={COMBOS}
              comboCounts={comboCounts}
              handleChangeCombo={handleChangeCombo}
            />
          )}

          {selectedTab === "step4" && (
            <>
              <PaymentSection
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                PAYMENT_METHODS={PAYMENT_METHODS}
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
              />
              {bookingLoading && (
                <div className="mt-4 text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#F1B4BB]"></div>
                  <p className="mt-2 text-gray-600">Đang xử lý đặt vé...</p>
                </div>
              )}
              {bookingError && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {bookingError}
                </div>
              )}
            </>
          )}

          {selectedTab === "step5" && (
            <div className="justify-center items-center py-20">
              <div className="mb-6 flex flex-col items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#F1B4BB] mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M8 12l2 2l4-4"
                    stroke="#F1B4BB"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#F1B4BB] font-bold text-lg">
                  Đặt vé thành công!
                </span>
                <span className="mt-4 text-lg text-center">
                  Mã đặt vé của bạn:{" "}
                  <span className="font-bold text-[#1F4172]">
                    {bookingCode || "ABC12345"}
                  </span>
                </span>
                <span className="mt-4 text-center text-gray-600">
                  Vui lòng lưu mã này để tra cứu vé sau này
                </span>
                <span className="mt-6 text-center text-gray-600">
                  Xin vui lòng kiểm tra email để nhận thông tin chi tiết!
                </span>
              </div>
            </div>
          )}
          {selectedTab === "overtime" && (
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-2xl font-bold text-[#1F4172] mb-4">
                Quá thời gian giữ ghế
              </div>
              <div className="text-lg text-gray-700 mb-6">
                Bạn đã vượt quá thời gian giữ ghế. Vui lòng đặt lại vé để tiếp
                tục.
              </div>
              <button
                className="bg-[#1F4172] text-white px-6 py-2 rounded font-semibold"
                onClick={() => setSelectedTab("step1")}
              >
                Đặt lại vé
              </button>
            </div>
          )}
        </BookingStepsTabs>

        <AuthDialog
          isOpen={openSeatWarning}
          onClose={() => setOpenSeatWarning(false)}
          type="error"
          action="login"
          message={seatWarningMessage}
        />
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-[350px] max-w-full">
        <SidebarBookingSummary
          selectedMovie={selectedMovie}
          movies={movies || []}
          selectedTheater={selectedTheater}
          selectedShowtime={selectedShowtime}
          selectedDate={selectedDate}
          selectedSeats={selectedSeats}
          comboCounts={comboCounts}
          COMBOS={COMBOS}
          selectedTab={selectedTab}
          onPrevStep={() => {
            if (selectedTab === "step2") {
              setSelectedTab("step1");
              setSelectedShowtime("");
              setSelectedDate("2025-07-06");
              setSelectedTheater("");
              setSelectDisplayAccord("showtime");
              setSelectedSeats([]);
            } else if (selectedTab === "step3") {
              setSelectedTab("step2");
              setComboCounts({});
            } else if (selectedTab === "step4") {
              setSelectedTab("step3");
            } else if (selectedTab === "step5") {
              setSelectedTab("step4");
            }
          }}
          onNextStep={handleNextStep}
          disableNext={!(selectedCity && selectedMovie && selectedShowtime)}
          seatTimer={seatTimer}
        />
      </div>
    </div>
  );
}
