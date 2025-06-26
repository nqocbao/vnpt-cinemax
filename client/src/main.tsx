import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./page/AuthPage/LoginPage.tsx";
import Home from "./page/HomePage/Home.tsx";
import Detail from "./page/DetailPage/Detail.tsx";
import NowMovies from "./page/Movies/NowMovies.tsx";
import ComingSoonMovies from "./page/Movies/ComingSoonMovies.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/now-movies" element={<NowMovies />} />
        <Route path="/coming-movies" element={<ComingSoonMovies />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
