export interface Ticket {
  id?: number;
  movieId: number;
  theaterId: number;
  seatId: number;
  userId: number;
  price: number;
  status: "pending" | "paid" | "cancelled" | "used";
  bookingTime?: string;
  bookingCode: string;
  totalPrice: number
}
export interface GroupedTicket {
  bookingCode: string;
  movieTitle: string;
  userName: string;
  status: Ticket["status"];
  seats: string[];
  totalPrice: number;
}

export interface BookingRequest {
  movieId: number;
  theaterId: number;
  showTimeId: number;
  userId: number;
  seats: Array<{
    row: string;
    col: string;
  }>;
  combos?: Array<{
    id: number;
    quantity: number;
  }>;
  totalPrice: number;
  paymentMethod: string;
  promoCode?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  ticketIds?: number[];
  bookingCode?: string;
}
