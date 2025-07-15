import MainLayout from "@/layouts/MainLayout";
import React from "react";
import WrapperBooking from "./WrapperBooking";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const location = useLocation();
  const bookingData = location.state || {};

  return (
    <MainLayout>
      <WrapperBooking bookingData={bookingData} />
    </MainLayout>
  );
}
