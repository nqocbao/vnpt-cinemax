import MainLayout from "@/layouts/MainLayout";
import About from "./About";
import Advertise from "./Advertise";
import Blog from "./Blog";
import EventList from "./EventList";
import MovieList from "./MovieList";
import Slider from "./Slider";

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
