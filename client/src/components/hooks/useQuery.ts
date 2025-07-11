import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMovies() {
  return useQuery({
    queryKey: ["MOVIES"],
    queryFn: async () => {
      const res = await axios.get("/api/movie");
      return res.data;
    },
  });
}

export function useMovieDetail(id?: string | number) {
  return useQuery({
    queryKey: ["MOVIE_DETAIL", id],
    queryFn: async () => {
      const res = await axios.get(`/api/movie/${id}`);
      return res.data;
    },
  });
}

export function useTheaters() {
  return useQuery({
    queryKey: ["THEATERS"],
    queryFn: async () => {
      const res = await axios.get("/api/theaters");
      return res.data;
    },
  });
}

export function usePosts() {
  return useQuery({
    queryKey: ["POSTS"],
    queryFn: async () => {
      const res = await axios.get("/api/posts");
      return res.data;
    },
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ["USERS"],
    queryFn: async () => {
      const res = await axios.get("/api/admin/users");
      return res.data;
    },
  });
}

export function useUserAdminDetail(id?: string | number) {
  return useQuery({
    queryKey: ["USERS_DETAIL", id],
    queryFn: async () => {
      const res = await axios.get(`/api/admin/users/${id}`);
      return res.data;
    },
  });
}
export function useUser(id?: string | number) {
  return useQuery({
    queryKey: ["USER", id],
    queryFn: async () => {
      const res = await axios.get(`/api/users/${id}`);
      return res.data;
    },
  });
}

export function useCustomer(id?: string | number) {
  return useQuery({
    queryKey: ["CUSTOMER", id],
    queryFn: async () => {
      const res = await axios.get(`/api/customer/${id}`);
      return res.data;
    },
  });
}

export function useMovieAdminDetail(id?: string | number) {
  return useQuery({
    queryKey: ["MOVIE_DETAIL_ADMIN", id],
    queryFn: async () => {
      const res = await axios.get(`/api/movie/${id}`);
      return res.data;
    },
  });
}
