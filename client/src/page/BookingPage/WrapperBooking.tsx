import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useMovies, useTheaters } from "@/components/hooks/useQuery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Movies } from "@/components/interface/movies";
import type { Theater } from "@/components/interface/theaters";
import AuthDialog from "@/components/custom/AuthDialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Ví dụ: 12 hàng, mỗi hàng 12 ghế
const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const COLS = Array.from({ length: 12 }, (_, i) => 12 - i); // 12 -> 1

// Trạng thái ghế mẫu
const soldSeats = [
  { row: "H", col: 10 },
  { row: "H", col: 9 },
  { row: "G", col: 7 },
];
const vipSeats = [{ row: "E", col: 6 }];

// Dữ liệu mẫu combo
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

export default function WrapperBooking() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<Movies>({
    id: -1,
    title: "",
  } as Movies);
  const [selectedShowtime, setSelectedShowtime] = useState<string>("");
  const [selectDisplayAccord, setSelectDisplayAccord] = useState("theater");
  const [selectedDate, setSelectedDate] = useState("2025-07-06");
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedTab, setSelectedTab] = useState("step1");
  const [selectedSeats, setSelectedSeats] = useState<
    { row: string; col: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [openSeatWarning, setOpenSeatWarning] = useState(false);
  const [comboCounts, setComboCounts] = useState<{ [id: number]: number }>({});
  const [totalCombo, setTotalCombo] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("momo");
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [hoveredSeat, setHoveredSeat] = useState<{
    row: string;
    col: number;
  } | null>(null);
  const [seatWarningMessage, setSeatWarningMessage] = useState("");
  const [seatTimer, setSeatTimer] = useState(300);

  const { data: movies } = useMovies();
  const { data: theaters = [] } = useTheaters();

  const DATES = [
    { label: "Chủ Nhật", value: "2025-07-06" },
    { label: "Hôm Nay", value: "2025-07-07" },
    { label: "Thứ Ba", value: "2025-07-08" },
  ];

  // Lấy danh sách thành phố duy nhất từ theaters
  const cityList = Array.from(
    new Set((theaters || []).map((t: Theater) => t.location))
  ).filter(Boolean);

  const handleSelectSeat = (row: string, col: number) => {
    const seat = { row, col };
    if (soldSeats.some((s) => s.row === row && s.col === col)) return; // Không chọn ghế đã bán
    let newSeats;
    if (selectedSeats.some((s) => s.row === row && s.col === col)) {
      newSeats = selectedSeats.filter((s) => !(s.row === row && s.col === col));
    } else {
      newSeats = [...selectedSeats, seat];
    }
    setSelectedSeats(newSeats);
    setTotalPrice(
      newSeats.reduce((sum, seat) => sum + getSeatPrice(seat.row, seat.col), 0)
    );
  };

  // Tính tổng tiền
  const getSeatPrice = (row: string, col: number) => {
    return vipSeats.some((s) => s.row === row && s.col === col) ? 75000 : 50000;
  };

  // Hiển thị danh sách ghế đang chọn
  const selectedSeatsDisplay = selectedSeats
    .map((s) => `${s.row}${s.col}`)
    .join(", ");

  // Kiểm tra ghế lẻ
  function hasSingleEmptySeat(
    selectedSeats: { row: string; col: number }[],
    soldSeats: { row: string; col: number }[]
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

  const handleChangeCombo = (id: number, delta: number) => {
    setComboCounts((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      return next;
    });
  };

  useEffect(() => {
    const total = COMBOS.reduce(
      (sum, c) => sum + (comboCounts[c.id] || 0) * c.price,
      0
    );
    setTotalCombo(total);
  }, [comboCounts]);

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

  // Hàm kiểm tra ghế VIP
  const isVipSeat = (row: string, col: number) => {
    const vipRows = ["E", "F", "G", "H"];
    return vipRows.includes(row) && col >= 3 && col <= 10;
  };

  // useEffect đếm ngược khi ở step3, step4, step5
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

  console.log(cityList);
  return (
    <div className="flex flex-col md:flex-row gap-8 w-full mt-8 px-3 md:px-10 pb-10">
      {/* Main content */}
      <div className="flex-1 bg-white w-full rounded-lg shadow-md p-8">
        <Tabs value={selectedTab}>
          <TabsList
            className="mb-8 w-full flex flex-wrap justify-between items-center border-b border-gray-200 bg-white px-0 md:px-2"
            style={{ minHeight: 0 }}
          >
            <TabsTrigger
              value="step1"
              className={`flex-1 min-w-[120px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
                selectedTab === "step1"
                  ? "text-[#1F4172] border-[#1F4172]"
                  : "text-[#1F4172] border-[#1F4172]"
              }`}
            >
              Chọn phim / Rạp / Suất
            </TabsTrigger>
            <TabsTrigger
              value="step2"
              className={`flex-1 min-w-[90px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
                selectedTab === "step1"
                  ? "text-[#1F4172] border-transparent"
                  : "text-[#1F4172] border-[#1F4172]"
              }`}
              disabled={selectedTab === "step1"}
            >
              Chọn ghế
            </TabsTrigger>
            <TabsTrigger
              value="step3"
              className={`flex-1 min-w-[90px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
                selectedTab === "step3"
                  ? "text-[#1F4172] border-[#1F4172]"
                  : selectedTab === "step1" || selectedTab === "step2"
                  ? "text-[#1F4172] border-transparent"
                  : "text-[#1F4172] border-[#1F4172]"
              }`}
              disabled={selectedTab === "step1" || selectedTab === "step2"}
            >
              Chọn thức ăn
            </TabsTrigger>
            <TabsTrigger
              value="step4"
              className={`flex-1 min-w-[90px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
                selectedTab === "step4"
                  ? "text-[#1F4172] border-[#1F4172]"
                  : selectedTab === "step1" ||
                    selectedTab === "step2" ||
                    selectedTab === "step3"
                  ? "text-[#1F4172] border-transparent"
                  : "text-[#1F4172] border-[#1F4172]"
              }`}
              disabled={
                selectedTab === "step1" ||
                selectedTab === "step2" ||
                selectedTab === "step3"
              }
            >
              Thanh toán
            </TabsTrigger>
            <TabsTrigger
              value="step5"
              className={`flex-1 min-w-[90px] text-xs md:text-base font-semibold px-1 md:px-2 py-2 md:py-3 border-0 border-b-2 transition-all duration-200 rounded-none shadow-none ${
                selectedTab === "step5"
                  ? "text-[#1F4172] border-[#1F4172]"
                  : selectedTab === "step1" ||
                    selectedTab === "step2" ||
                    selectedTab === "step3" ||
                    selectedTab === "step4"
                  ? "text-[#1F4172] border-transparent"
                  : "text-[#1F4172] border-[#1F4172]"
              }`}
              disabled={
                selectedTab === "step1" ||
                selectedTab === "step2" ||
                selectedTab === "step3" ||
                selectedTab === "step4"
              }
            >
              Xác nhận
            </TabsTrigger>
          </TabsList>
          <TabsContent value="step1">
            <Accordion type="single" value={selectDisplayAccord} collapsible>
              <AccordionItem value="theater">
                <AccordionTrigger
                  className="text-xl"
                  onClick={() => setSelectDisplayAccord("theater")}
                >
                  Chọn vị trí {selectedCity != "" ? " - " + selectedCity : ""}
                </AccordionTrigger>
                <AccordionContent>
                  {cityList.map((city) => (
                    <Button
                      variant="outline"
                      className={` ${
                        selectedCity === city ? `bg-[#F1B4BB]` : ``
                      } mx-2 my-1 cursor-pointer`}
                      onClick={() => {
                        if (selectedCity === city) {
                          setSelectedCity("");
                        } else {
                          setSelectedCity(city);
                          setSelectedMovie({
                            id: -1,
                            title: "",
                          } as Movies);
                          setSelectDisplayAccord("movie");
                        }
                      }}
                    >
                      {city}
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="movie">
                <AccordionTrigger
                  className="text-xl"
                  onClick={() => setSelectDisplayAccord("movie")}
                >
                  Chọn phim{" "}
                  {selectedMovie.id !== -1 ? " - " + selectedMovie.title : ""}
                </AccordionTrigger>
                <AccordionContent>
                  <Carousel className="w-full relative">
                    <CarouselContent className="">
                      {movies.slice(0, 8).map((movie: Movies) => (
                        <CarouselItem
                          key={movie.id}
                          className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/4"
                        >
                          <div className="flex flex-col items-center cursor-pointer">
                            <div
                              className="w-full aspect-[2/3] bg-gray-100 rounded overflow-hidden flex items-center justify-center relative"
                              onClick={() => {
                                setSelectedMovie(movie);
                                setSelectedShowtime("");
                                setSelectDisplayAccord("showtime");
                              }}
                            >
                              <img
                                src={movie.posterUrl}
                                alt={movie.title}
                                className="object-cover w-full h-full"
                              />
                              {selectedMovie?.id === movie.id && (
                                <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <svg
                                    className="w-16 h-16 text-white bg-[#F1B4BB] rounded-full p-2 border-4 border-[#F1B4BB]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <path
                                      d="M9 12l2 2l4-4"
                                      stroke="#fff"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                            <div className="mt-2 text-center text-sm font-medium line-clamp-2">
                              {movie.title}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-amber-50 left-2 size-10 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="bg-amber-50 right-2 size-10 top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="showtime">
                <AccordionTrigger className="text-xl">
                  Chọn suất
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mb-4 flex gap-2">
                    {DATES.map((d) => (
                      <Button
                        key={d.value}
                        variant={
                          selectedDate === d.value ? "default" : "outline"
                        }
                        className={`rounded ${
                          selectedDate === d.value
                            ? "bg-[#1F4172] text-white"
                            : ""
                        }`}
                        onClick={() => setSelectedDate(d.value)}
                      >
                        <div className="flex flex-col items-center">
                          <span>{d.label}</span>
                          <span className="text-xs">
                            {d.value.slice(5).replace("-", "/")}
                          </span>
                        </div>
                      </Button>
                    ))}
                    <select
                      className="ml-auto border rounded px-2 py-1 h-10"
                      value={selectedTheater}
                      onChange={(e) => setSelectedTheater(e.target.value)}
                      title="Chọn rạp"
                    >
                      <option value="">Tất cả các rạp</option>
                      {(theaters as Theater[])
                        .filter(
                          (t) => !selectedCity || t.location === selectedCity
                        )
                        .map((t) => (
                          <option key={t.id} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="divide-y">
                    {theaters
                      .filter(
                        (t) => !selectedCity || t.location === selectedCity
                      )
                      .filter(
                        (t) => !selectedTheater || t.name === selectedTheater
                      )
                      .map((theater: any) => (
                        <div key={theater.id} className="py-4">
                          <div className="font-semibold">{theater.name}</div>
                          <div className="text-gray-500 text-sm mb-2">
                            2D Phụ Đề
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {["13:15", "14:45", "20:15", "21:30"].map(
                              (time) => (
                                <Button
                                  key={time + theater.id}
                                  variant={
                                    selectedShowtime === time + theater.id
                                      ? "default"
                                      : "outline"
                                  }
                                  className={`rounded px-4 ${
                                    selectedShowtime === time + theater.id
                                      ? "bg-[#1F4172] text-white"
                                      : ""
                                  } cursor-pointer`}
                                  onClick={() => {
                                    setSelectedShowtime(time + theater.id);
                                    setSelectedTheater(theater.name);
                                  }}
                                >
                                  {time}
                                </Button>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="step2">
            <div className="flex flex-col items-center">
              {ROWS.map((row) => (
                <div key={row} className="flex items-center mb-1">
                  <span className="w-6 text-gray-500">{row}</span>
                  {COLS.map((col) => {
                    const isSold = soldSeats.some(
                      (s) => s.row === row && s.col === col
                    );
                    const isSelected = selectedSeats.some(
                      (s) => s.row === row && s.col === col
                    );
                    const isVip = isVipSeat(row, col);
                    const isHovered =
                      hoveredSeat &&
                      hoveredSeat.row === row &&
                      hoveredSeat.col === col;
                    return (
                      <button
                        key={col}
                        className={`
                          w-8 h-8 m-0.5 rounded border flex items-center justify-center
                          ${
                            isSold
                              ? "bg-gray-300 cursor-not-allowed text-gray-500"
                              : ""
                          }
                          ${
                            isSelected
                              ? "bg-[#F1B4BB] text-white border-[#F1B4BB]"
                              : ""
                          }
                          ${isVip ? "border-[#F1B4BB]" : ""}
                          ${
                            isHovered
                              ? "bg-[#F1B4BB] text-white border-[#F1B4BB]"
                              : ""
                          }
                        `}
                        disabled={isSold}
                        onClick={() => handleSelectSeat(row, col)}
                        onMouseEnter={() => setHoveredSeat({ row, col })}
                        onMouseLeave={() => setHoveredSeat(null)}
                      >
                        {col}
                      </button>
                    );
                  })}
                  <span className="w-6 text-gray-500">{row}</span>
                </div>
              ))}
            </div>
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
          </TabsContent>
          <TabsContent value="step3">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Chọn Combo / Sản phẩm
              </h2>
              {COMBOS.map((combo) => (
                <div key={combo.id} className="flex items-center border-b py-4">
                  <img
                    src={combo.img}
                    alt={combo.name}
                    className="w-24 h-24 object-contain rounded mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{combo.name}</div>
                    <div className="text-gray-600 text-sm mb-1">
                      {combo.desc}
                    </div>
                    <div className="font-bold text-base text-[#F1B4BB]">
                      Giá: {combo.price.toLocaleString()} đ
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
                    <button
                      className="w-8 h-8 border rounded text-xl"
                      onClick={() => handleChangeCombo(combo.id, -1)}
                    >
                      -
                    </button>
                    <span className="mx-3 w-6 text-center">
                      {comboCounts[combo.id] || 0}
                    </span>
                    <button
                      className="w-8 h-8 border rounded text-xl"
                      onClick={() => handleChangeCombo(combo.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="step4">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Khuyến mãi</h2>
              <div className="flex gap-2 mb-2">
                <input
                  className="border rounded px-3 py-2 flex-1"
                  placeholder="Mã khuyến mãi"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="bg-[#F1B4BB] text-white px-6 py-2 rounded font-semibold">
                  Áp Dụng
                </button>
              </div>
              <div className="text-xs text-gray-500 mb-4">
                Lưu ý: Có thể áp dụng nhiều vouchers vào 1 lần thanh toán
              </div>
              {/* Có thể thêm mục khuyến mãi của bạn, điểm stars ở đây nếu muốn */}
              <div className="bg-white rounded-lg p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">
                  Phương thức thanh toán
                </h2>
                <div className="flex flex-col gap-3">
                  {PAYMENT_METHODS.map((pm) => (
                    <label
                      key={pm.id}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === pm.id}
                        onChange={() => setSelectedPayment(pm.id)}
                        className="accent-[#F1B4BB] w-5 h-5"
                      />
                      <img
                        src={pm.logo}
                        alt={pm.id}
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-base">{pm.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="step5"
            className="justify-center items-center py-20"
          >
            <div className="flex flex-col justify-center items-center h-fit">
              <CheckCircle className="w-12 h-12 text-[#F1B4BB]" />
              <span>Thanh toán thành công</span>
            </div>
          </TabsContent>
          <TabsContent
            value="overtime"
            className="flex flex-col items-center justify-center min-h-[300px]"
          >
            <div className="text-2xl font-bold text-[#1F4172] mb-4">
              Quá thời gian giữ ghế
            </div>
            <div className="text-lg text-gray-700 mb-6">
              Bạn đã vượt quá thời gian giữ ghế (5 phút). Vui lòng đặt lại vé để
              tiếp tục.
            </div>
            <Button
              className="bg-[#1F4172] text-white px-6 py-2 rounded font-semibold"
              onClick={() => setSelectedTab("step1")}
            >
              Đặt lại vé
            </Button>
          </TabsContent>
        </Tabs>
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        {/* Timer giữ ghế */}
        {["step3", "step4"].includes(selectedTab) && (
          <div className="w-full flex justify-center items-center">
            <span className="px-4 py-2 rounded text-lg font-bold">
              Thời gian giữ ghế:{" "}
              {`${String(Math.floor(seatTimer / 60)).padStart(2, "0")}:${String(
                seatTimer % 60
              ).padStart(2, "0")}`}
            </span>
          </div>
        )}
        <div className="w-full">
          <div className="rounded-t-lg h-2 w-full bg-[#F1B4BB] mb-4" />
          <div className="flex gap-4">
            <div className="w-28 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
              {selectedMovie && movies ? (
                <img
                  src={
                    movies.find(
                      (m: { id: number }) => m.id === selectedMovie.id
                    )?.posterUrl
                  }
                  alt="Poster"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <svg
                  width="64"
                  height="64"
                  fill="none"
                  stroke="gray"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 7h18M7 3v18" />
                </svg>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-lg mb-1">
                  {selectedMovie && movies
                    ? movies.find(
                        (m: { id: number }) => m.id === selectedMovie.id
                      )?.title
                    : "-"}
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
                  2D Phụ Đề
                  <span className="bg-[#F1B4BB] text-white rounded px-2 py-0.5 text-xs font-bold">
                    T13
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 font-semibold text-lg">
            {selectedTheater !== "" ? selectedTheater + " - Rạp 1" : ""}
          </div>
          <div className="mt-2 text-gray-700">
            Suất:{" "}
            <span className="font-bold">
              {selectedShowtime ? selectedShowtime.slice(0, 5) : ""}
            </span>
            {selectedDate && selectedShowtime && (
              <span>
                {" "}
                - {DATES.find((d) => d.value === selectedDate)?.label},{" "}
                <b>{selectedDate.split("-").reverse().join("/")}</b>
              </span>
            )}
          </div>
          {selectedTab !== "step1" && (
            <div className="mt-6 flex flex-col">
              <hr className="my-4" />
              <div>
                <span className="font-bold">{selectedSeats.length}x</span> ghế
                đơn
              </div>
              <div className="text-base font-semibold mb-2">
                Ghế đang chọn:{" "}
                <span className="text-[#F1B4BB]">
                  {selectedSeatsDisplay || "-"}
                </span>
              </div>
            </div>
          )}
          {selectedTab === "step3" && (
            <>
              {/* Danh sách combo đã chọn */}
              {Object.values(comboCounts).some((count) => count > 0) && (
                <hr className="my-4" />
              )}
              {COMBOS.filter((c) => comboCounts[c.id] > 0).map((c) => (
                <div
                  key={c.id}
                  className="flex justify-between items-center py-2"
                >
                  <div>
                    <span className="font-bold">{comboCounts[c.id]}x</span>{" "}
                    {c.name}
                  </div>
                  <div>{(c.price * comboCounts[c.id]).toLocaleString()} đ</div>
                </div>
              ))}
            </>
          )}
          <hr className="my-4" />
          <div className="flex justify-between w-full text-lg font-semibold mb-2">
            <span>Tổng cộng</span>
            <span className="text-[#F1B4BB]">
              {(totalPrice + totalCombo).toLocaleString()} đ
            </span>
          </div>
        </div>
        <div className="flex w-full gap-4 mt-8">
          <Button
            variant="ghost"
            className={`${
              selectedTab === "step5" ? "hidden" : "flex-1"
            } text-[#F1B4BB] text-lg cursor-pointer`}
            onClick={() => {
              if (selectedTab === "step2") {
                setSelectedTab("step1");
                setSelectedShowtime("");
                setSelectedDate("2025-07-06");
                setSelectedTheater("");
                setSelectDisplayAccord("showtime");
                setSelectedSeats([]);
                setTotalPrice(0);
              } else if (selectedTab === "step3") {
                setSelectedTab("step2");
                setTotalCombo(0);
                setComboCounts({});
              } else if (selectedTab === "step4") {
                setSelectedTab("step3");
              } else if (selectedTab === "step5") {
                setSelectedTab("step4");
              }
            }}
          >
            Quay lại
          </Button>
          <Button
            className={`${
              selectedTab === "step5" ? "hidden" : "flex-1"
            } bg-[#F1B4BB] hover:bg-[#f49aa5] text-white text-lg cursor-pointer`}
            disabled={!(selectedCity && selectedMovie && selectedShowtime)}
            onClick={() => {
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
                setOpenConfirmDialog(true);
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
            }}
          >
            Tiếp tục
          </Button>
          <Button
            className={`${
              selectedTab !== "step5" ? "hidden" : ""
            } w-full bg-[#8B008B] text-white cursor-pointer focus:bg-[#ea60ea]`}
            onClick={() => navigate("/")}
          >
            Trở lại trang chủ
          </Button>
        </div>
      </div>

      {/* Dialog xác nhận đặt vé */}
      <Dialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog}>
        <DialogContent className="max-w-lg bg-white">
          <div className="text-center text-2xl font-bold mb-4">
            THÔNG TIN ĐẶT VÉ
          </div>
          <div className="bg-gray-50 rounded p-4 mb-3">
            <div className="mb-2">
              <span className="font-semibold">Phim</span>
              <br />
              <span className="text-[#1F4172] font-bold text-lg">
                {selectedMovie?.title}
              </span>
              <div className="text-sm">
                2D Phụ Đề{" "}
                <span className="bg-[#F1B4BB] text-white rounded px-2 py-0.5 ml-2">
                  T13
                </span>
              </div>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Rạp</span>
              <br />
              <span className="text-[#1F4172] font-bold text-lg">
                {selectedTheater}
              </span>
              <div className="text-sm">
                {selectedShowtime ? selectedShowtime.slice(0, 5) : ""} -{" "}
                {DATES.find((d) => d.value === selectedDate)?.label},{" "}
                {selectedDate.split("-").reverse().join("/")}
              </div>
            </div>
            <div className="mb-2">
              <div>RAP 1</div>
              <div>
                Ghế: {selectedSeats.map((s) => s.row + s.col).join(", ")}
              </div>
              {COMBOS.filter((c) => comboCounts[c.id] > 0).map((c) => (
                <div key={c.id}>
                  {comboCounts[c.id]}x {c.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#1F4172] text-white font-bold text-xl rounded px-4 py-2 mb-4">
            <span>Tổng</span>
            <span>{(totalPrice + totalCombo).toLocaleString()} VNĐ</span>
          </div>
          <div className="border-t border-dashed my-4"></div>
          <div className="flex items-start gap-2 mb-4">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              Tôi xác nhận các thông tin đặt vé đã chính xác
              <br />
              Tôi đồng ý các{" "}
              <a href="#" className="text-[#F1B4BB] font-semibold">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="#" className="text-[#F1B4BB] font-semibold">
                Chính sách bảo mật & Chia sẻ thông tin
              </a>{" "}
              của Galaxy Cinema.
            </span>
          </div>
          <Button
            className="w-full bg-[#1F4172] text-white text-lg font-semibold cursor-pointer"
            disabled={!agreeTerms}
            onClick={() => {
              setOpenConfirmDialog(false);
              setSelectedTab("step5");
            }}
          >
            Thanh Toán
          </Button>
        </DialogContent>
      </Dialog>

      {/* Dialog cảnh báo ghế lẻ sử dụng AuthDialog */}
      <AuthDialog
        isOpen={openSeatWarning}
        onClose={() => setOpenSeatWarning(false)}
        type="error"
        action="login"
        message={seatWarningMessage}
      />
    </div>
  );
}
