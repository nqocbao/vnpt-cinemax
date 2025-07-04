import React, { useState } from "react";
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

const Slider = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
const [selectedMovie, setSelectedMovie] = useState('');
const [selectedCinema, setSelectedCinema] = useState('');
const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="movie1"
            >
              Phim 1
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="movie2"
            >
              Phim 2
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="system"
            >
              System
            </SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedCinema} disabled={!selectedMovie}>
          <SelectTrigger className="w-[220px] rounded-none border-none shadow-xl focus-visible:ring-0">
            <SelectValue placeholder="Chọn rạp" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="cinema1"
            >
              Rạp 1
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="cinema2"
            >
              Rạp 2
            </SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedDate} disabled={!selectedCinema}>
          <SelectTrigger className="w-[220px] rounded-none border-none shadow-xl focus-visible:ring-0">
            <SelectValue placeholder="Chọn ngày" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="light"
            >
              02/07/2025
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="dark"
            >
              03/07/2025
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
              value="light"
            >
              10:00
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="dark"
            >
              14:00
            </SelectItem>
            <SelectItem
              className="hover:bg-[#CC9999] hover:text-white"
              value="system"
            >
              20:00
            </SelectItem>
          </SelectContent>
        </Select>
        <Button className="bg-[#8B008B] text-white hover:opacity-80 cursor-pointer rounded-none" disabled={!selectedTime}>
          Mua Vé Nhanh
        </Button>
      </div>
    </div>
  );
};

export default Slider;
