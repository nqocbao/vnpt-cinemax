import { useState } from "react";
import type {
  BookingRequest,
  BookingResponse,
} from "@/components/interface/tickets";

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookTickets = async (
    bookingData: BookingRequest
  ): Promise<BookingResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/tickets/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Có lỗi xảy ra khi đặt vé";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getTicketsByUserId = async (userId: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/tickets/user/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Có lỗi xảy ra khi lấy danh sách vé";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateTicketStatus = async (
    ticketId: number,
    userId: number,
    status: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/tickets/status/${ticketId}?userId=${userId}&status=${status}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Có lỗi xảy ra khi cập nhật trạng thái vé";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    bookTickets,
    getTicketsByUserId,
    updateTicketStatus,
    loading,
    error,
  };
};
