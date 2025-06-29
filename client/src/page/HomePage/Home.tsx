import React from "react";
import Slider from "./Slider";
import MovieList from "./MovieList";
import Blog from "./Blog";
import EventList from "./EventList";
import Advertise from "./Advertise";
import About from "./About";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Slider />
      <MovieList />
      <Blog />
      <EventList />
      <Advertise />
      <About />
    </MainLayout>
  );
};

export default Home;
