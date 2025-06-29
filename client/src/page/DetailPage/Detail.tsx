import React from "react";
import Trailer from "./Trailer";
import MovieInfo from "./MovieInfo";
import MainLayout from "@/layouts/MainLayout";

const Detail = () => {
  return (
    <MainLayout>
      <Trailer />
      <MovieInfo />
    </MainLayout>
  );
};

export default Detail;
