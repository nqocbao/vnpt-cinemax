import { useState } from "react";

export interface ShowTime {
  id: number;
  movieId: number;
  theaterId: number;
  startTime: string;
  endTime: string;
  date: string;
  price: number;
}

export const useShowTimes = () => {
  const [showTimes, setShowTimes] = useState<ShowTime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllShowTimes = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/show_times`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setShowTimes(data);
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Có lỗi xảy ra khi lấy danh sách suất chiếu";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getShowTimesByMovieAndTheater = async (
    movieId: number,
    theaterId: number,
    date: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/show_times/movie/${movieId}/theater/${theaterId}?date=${date}`,
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
        err instanceof Error ? err.message : "Có lỗi xảy ra khi lấy suất chiếu";
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    showTimes,
    loading,
    error,
    getAllShowTimes,
    getShowTimesByMovieAndTheater,
  };
};
