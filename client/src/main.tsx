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
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
