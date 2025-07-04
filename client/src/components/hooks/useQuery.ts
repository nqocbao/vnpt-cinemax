import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMovies(){
    return useQuery({
    queryKey: ["MOVIES"],
    queryFn: async () => {
      const res = await axios.get("/api/movie");
      return res.data;
    },
  });
}

export function useMovieDetail(id?: string | number){
    return  useQuery({
    queryKey: ["MOVIE_DETAIL", id],
    queryFn: async () => {
      const res = await axios.get(`/api/movie/${id}`);
      return res.data;
    },
  });
}

export function useTheaters(){
    return useQuery({
    queryKey: ["THEATERS"],
    queryFn: async () => {
      const res = await axios.get("/api/theaters");
      return res.data;
    },
  });
}