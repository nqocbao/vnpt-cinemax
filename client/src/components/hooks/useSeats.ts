import { useState } from "react";
import type { Seat } from "../interface/seat";

export const useSeats = () => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getSeatsByTheater = async (theaterId: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/seats/theater/${theaterId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSeats(data);
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Có lỗi xảy ra khi lấy danh sách ghế";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getSeatStatusByShowTime = async (showTimeId: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/seats/showtime/${showTimeId}/status`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
          : "Có lỗi xảy ra khi lấy trạng thái ghế";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getBookedSeatsByShowtime = async (
    movieId: number,
    theaterId: number,
    showTimeId: number
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/tickets/booked-seats?movieId=${movieId}&theaterId=${theaterId}&showTimeId=${showTimeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
        err instanceof Error ? err.message : "Có lỗi xảy ra khi lấy ghế đã đặt";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    seats,
    loading,
    error,
    getSeatsByTheater,
    getSeatStatusByShowTime,
    getBookedSeatsByShowtime,
  };
};
