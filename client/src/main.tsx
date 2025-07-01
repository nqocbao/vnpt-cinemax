import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./page/HomePage/Home.tsx";
import Detail from "./page/DetailPage/Detail.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import Auth from "./page/AuthPage/Auth.tsx";
import Booking from "./page/BookingPage/Booking.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
