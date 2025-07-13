export interface Seat {
  id: number;
  theaterId: number;
  seatRow: string;
  seatNumber: string;
  seatType: "standard" | "vip";
}

export interface SeatStatus {
  seatId: number;
  row: string;
  col: string;
  status: "available" | "occupied" | "selected";
}
