import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import LoginPage from "./page/AuthPage/LoginPage.tsx";
import Detail from "./page/DetailPage/Detail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
