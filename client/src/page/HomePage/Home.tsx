import React from "react";
import Slider from "./Slider";
import Navbar from "../components/Navbar";
import MovieList from "./MovieList";
import Blog from "./Blog";
import EventList from "./EventList";
import Advertise from "./Advertise";
import About from "./About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <MovieList />
      <Blog />
      <EventList />
      <Advertise />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
