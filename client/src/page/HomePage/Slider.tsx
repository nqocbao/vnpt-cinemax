import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMovies, useTheaters } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import type { Theater } from "@/components/interface/theaters";
import AuthDialog from "@/components/custom/AuthDialog";

const Slider = () => {
  const navigate = useNavigate();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: movies } = useMovies();
  const { data: theaters } = useTheaters();

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleBooking = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setDialogOpen(true);
      return;
    }
    navigate("/booking", {
      state: {
        selectedMovie: selectedMovie,
        selectedCinema: selectedCinema,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
      },
    });
  };

  return (
    <div className="w-full relative space-y-4">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
        className="w-full overflow-hidden"
      >
        <CarouselContent>
          <CarouselItem>
            <img
              src="/banner1.jpg"
              alt=""
              className="relative z-0 w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banner2.jpg"
              alt=""
              className="relative z-0 w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banner3.jpg"
              alt=""
              className="relative z-0 w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/banner4.jpg"
              alt=""
              className="relative z-0 w-full h-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute w-12 h-12 left-2 top-1/2 -translate-y-1/2 z-30 bg-white hidden md:flex" />
        <CarouselNext className="absolute w-12 h-12 right-2 top-1/2 -translate-y-1/2 z-30 bg-white hidden md:flex" />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api && api.scrollTo(index)} // Scroll to slide click on dot
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full border border-white transition-colors duration-200 ${
                current === index + 1 ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
      <div className="max-w-screen-lg hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-7 relative z-50 bg-white">
        <Select onValueChange={setSelectedMovie}>
          <SelectTrigger className="w-[280px] rounded-none border-none shadow-xl focus-visible:ring-0 focus-visible:ring-0">
            <SelectValue placeholder="Phim" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {(movies ?? []).map((movie: Movies) => (
              <SelectItem
                className="hover:bg-[#CC9999] hover:text-white"
                value={movie.id.toString()}
              >
                {movie.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedCinema} disabled={!selectedMovie}>
          <SelectTrigger className="w-[220px] rounded-none border-none shadow-xl focus-visible:ring-0">
            <SelectValue placeholder="Chọn rạp" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {(theaters ?? []).map((theater: Theater) => (
              <SelectItem
                className="hover:bg-[#CC9999] hover:text-white"
                value={theater.location}
              >
                {theater.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedDate} disabled={!selectedCinema}>
          <SelectTrigger className="w-[220px] rounded-none border-none shadow-xl focus-visible:ring-0">
            <SelectValue placeholder="Chọn ngày" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="2025-07-06"
            >
              2025-07-06
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="2025-07-07"
            >
              2025-07-07
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="2025-07-08"
            >
              2025-07-08
            </SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedTime} disabled={!selectedDate}>
          <SelectTrigger className="w-[220px] rounded-none border-none shadow-xl focus-visible:ring-0">
            <SelectValue placeholder="Chọn suất" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="13:15"
            >
              13:15
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="14:45"
            >
              14:45
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="20:15"
            >
              20:15
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="21:30"
            >
              21:30
            </SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-[#8B008B] text-white hover:opacity-80 cursor-pointer rounded-none"
          disabled={!selectedTime}
          onClick={handleBooking}
        >
          Mua Vé Nhanh
        </Button>
      </div>
      <AuthDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        type="error"
        action="login"
        message="Bạn cần đăng nhập để đặt vé!"
      />
    </div>
  );
};

export default Slider;
