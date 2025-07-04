import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./index.css";
import Home from "./page/HomePage/Home.tsx";
import Detail from "./page/DetailPage/Detail.tsx";
import NowMovies from "./page/Movies/NowMovies.tsx";
import ComingSoonMovies from "./page/Movies/ComingSoonMovies.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import Auth from "./page/AuthPage/Auth.tsx";
import Booking from "./page/BookingPage/Booking.tsx";
import Profile from "./page/User/Profile.tsx";
import AdminDashboard from "./page/Admin/AdminDashboard.tsx";
import UserList from "./page/Admin/User/UserList.tsx";
import MovieList from "./page/Admin/Movies/MovieList.tsx";
import UserAdd from "./page/Admin/User/UserAdd.tsx";
import UserEdit from "./page/Admin/User/UserEdit.tsx";
import MovieAdd from "./page/Admin/Movies/MovieAdd.tsx";
import MovieEdit from "./page/Admin/Movies/MovieEdit.tsx";

const queryClient = new QueryClient()
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/now-movies" element={<NowMovies />} />
          <Route path="/coming-movies" element={<ComingSoonMovies />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="user">
              <Route index element={<UserList />} />
              <Route path="add" element={<UserAdd />} />
              <Route path="edit/:id" element={<UserEdit />} />
            </Route>
            <Route path="movie">
              <Route index element={<MovieList />} />
              <Route path="add" element={<MovieAdd />} />
              <Route path="edit/:id" element={<MovieEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
