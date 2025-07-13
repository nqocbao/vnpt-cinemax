import React from "react";
import type { Movies } from "@/components/interface/movies";

interface Combo {
  id: number;
  name: string;
  desc: string;
  price: number;
  img: string;
}

interface SidebarBookingSummaryProps {
  selectedMovie: Movies | null;
  movies: Movies[];
  selectedTheater: string;
  selectedShowtime: string;
  selectedDate: string;
  selectedSeats: { row: string; col: string }[];
  comboCounts: { [id: number]: number };
  COMBOS: Combo[];
  selectedTab: string;
  onPrevStep: () => void;
  onNextStep: () => void;
  disableNext: boolean;
  seatTimer: number;
}

const SidebarBookingSummary: React.FC<SidebarBookingSummaryProps> = ({
  selectedMovie,
  movies,
  selectedTheater,
  selectedShowtime,
  selectedDate,
  selectedSeats,
  comboCounts,
  COMBOS,
  selectedTab,
  onPrevStep,
  onNextStep,
  disableNext,
  seatTimer,
}) => {
  // Tính tổng tiền ghế
  const getSeatPrice = (row: string, col: string) => {
    const vipRows = ["E", "F", "G", "H"];
    const colNum = parseInt(col);
    const isVip = vipRows.includes(row) && colNum >= 3 && colNum <= 10;
    return isVip ? 75000 : 50000;
  };
  const totalPrice = selectedSeats.reduce(
    (sum, seat) => sum + getSeatPrice(seat.row, seat.col),
    0
  );

  const totalCombo = COMBOS.reduce(
    (sum, c) => sum + (comboCounts[c.id] || 0) * c.price,
    0
  );

  const selectedSeatsDisplay = selectedSeats
    .map((s) => `${s.row}${s.col}`)
    .join(", ");

  return (
    <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
      <div className="w-full">
        {/* Hiển thị thời gian giữ ghế */}
        {(selectedTab === "step3" || selectedTab === "step4") && (
          <div className="mb-4 flex items-center justify-center">
            <span className="text-[#F1B4BB] font-bold text-lg">
              Thời gian giữ ghế:{" "}
            </span>
            <span className="ml-2 text-lg font-mono">
              {`${Math.floor(seatTimer / 60)}:${(seatTimer % 60)
                .toString()
                .padStart(2, "0")}`}
            </span>
          </div>
        )}
        <div className="rounded-t-lg h-2 w-full bg-[#F1B4BB] mb-4" />
        <div className="flex gap-4">
          <div className="w-28 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
            {selectedMovie && movies ? (
              <img
                src={movies.find((m) => m.id === selectedMovie.id)?.posterUrl}
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
                  ? movies.find((m) => m.id === selectedMovie.id)?.title
                  : ""}
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
                {selectedMovie ? "2D Phụ Đề" : ""}
                <span className="bg-[#F1B4BB] text-white rounded px-2 py-0.5 text-xs font-bold">
                  {selectedMovie?.ageLimit}
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
              - <b>{selectedDate.split("-").reverse().join("/")}</b>
            </span>
          )}
        </div>
        {selectedTab !== "step1" && selectedSeats.length > 0 && (
          <div className="mt-6 flex flex-col">
            <hr className="my-4" />
            <div>
              <span className="font-bold">{selectedSeats.length}x</span> ghế đơn
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

      {selectedTab !== "step5" && selectedTab !== "overtime" && (
        <div className="flex w-full gap-4 mt-8">
          <button
            className="flex-1 text-[#F1B4BB] text-lg p-1 rounded-md cursor-pointer"
            onClick={onPrevStep}
          >
            Quay lại
          </button>
          <button
            className="flex-1 bg-[#F1B4BB] hover:bg-[#f49aa5] p-1 text-white rounded-md text-lg cursor-pointer"
            disabled={disableNext}
            onClick={onNextStep}
          >
            Tiếp tục
          </button>
        </div>
      )}
      {selectedTab === "step5" && (
        <div className="flex w-full gap-4 mt-8">
          <button
            className="flex-1 bg-[#F1B4BB] hover:bg-[#f49aa5] p-1 text-white rounded-md text-lg cursor-pointer"
            onClick={onNextStep}
          >
            Trở về Trang chủ
          </button>
        </div>
      )}
    </div>
  );
};

export default SidebarBookingSummary;
