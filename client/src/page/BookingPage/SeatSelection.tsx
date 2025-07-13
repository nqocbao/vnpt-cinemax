import React from "react";

interface SeatSelectionProps {
  ROWS: string[];
  COLS: string[];
  selectedSeats: { row: string; col: string }[];
  soldSeats: { row: string; col: string }[];
  handleSelectSeat: (row: string, col: string) => void;
  hoveredSeat: { row: string; col: string } | null;
  setHoveredSeat: (seat: { row: string; col: string } | null) => void;
  isVipSeat: (row: string, col: string) => boolean;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({
  ROWS,
  COLS,
  selectedSeats,
  soldSeats,
  handleSelectSeat,
  hoveredSeat,
  setHoveredSeat,
  isVipSeat,
}) => {
  return (
    <div className="flex flex-col items-center">
      {ROWS.map((row) => (
        <div key={row} className="flex items-center mb-1">
          <span className="w-6 text-gray-500 mr-1">{row}</span>
          {COLS.map((col) => {
            const isSold = soldSeats.some(
              (s) => s.row === row && s.col === col
            );
            const isSelected = selectedSeats.some(
              (s) => s.row === row && s.col === col
            );
            const isVip = isVipSeat(row, col);
            const isHovered =
              hoveredSeat && hoveredSeat.row === row && hoveredSeat.col === col;
            return (
              <button
                key={col}
                className={`w-10 h-10 m-0.5 rounded border flex items-center cursor-pointer justify-center ${
                  isSold ? "bg-gray-300 cursor-not-allowed text-gray-500" : ""
                } ${
                  isSelected ? "bg-[#F1B4BB] text-white border-[#F1B4BB]" : ""
                } ${isVip ? "border-[#F1B4BB]" : ""} ${
                  isHovered ? "bg-[#F1B4BB] text-white border-[#F1B4BB]" : ""
                }`}
                disabled={isSold}
                onClick={() => handleSelectSeat(row, col)}
                onMouseEnter={() => setHoveredSeat({ row, col })}
                onMouseLeave={() => setHoveredSeat(null)}
              >
                {col}
              </button>
            );
          })}
          <span className="w-6 ml-4 text-gray-500">{row}</span>
        </div>
      ))}
    </div>
  );
};

export default SeatSelection;
