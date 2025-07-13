import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Movies } from "@/components/interface/movies";
import type { Theater } from "@/components/interface/theaters";

interface SelectLocationAccordionProps {
  cityList: string[];
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  movies: Movies[];
  selectedMovie: Movies;
  setSelectedMovie: (movie: Movies) => void;
  theaters: Theater[];
  selectedTheater: string;
  setSelectedTheater: (theater: string) => void;
  selectedShowtime: string;
  setSelectedShowtime: (showtime: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectDisplayAccord: string;
  setSelectDisplayAccord: (val: string) => void;
  DATES: { label: string; value: string }[];
}

const SelectLocationAccordion: React.FC<SelectLocationAccordionProps> = ({
  cityList,
  selectedCity,
  setSelectedCity,
  movies,
  selectedMovie,
  setSelectedMovie,
  theaters,
  selectedTheater,
  setSelectedTheater,
  selectedShowtime,
  setSelectedShowtime,
  selectedDate,
  setSelectedDate,
  selectDisplayAccord,
  setSelectDisplayAccord,
  DATES,
}) => {
  return (
    <Accordion type="single" value={selectDisplayAccord} collapsible>
      <AccordionItem value="theater">
        <AccordionTrigger
          className="text-xl"
          onClick={() => setSelectDisplayAccord("theater")}
        >
          Chọn vị trí {selectedCity !== "" ? " - " + selectedCity : ""}
        </AccordionTrigger>
        <AccordionContent>
          {cityList.map((city) => (
            <Button
              key={city}
              variant="outline"
              className={` ${
                selectedCity === city ? `bg-[#F1B4BB]` : ``
              } mx-2 my-1 cursor-pointer`}
              onClick={() => {
                if (selectedCity === city) {
                  setSelectedCity("");
                } else {
                  setSelectedCity(city);
                  setSelectedMovie({ id: -1, title: "" } as Movies);
                  setSelectDisplayAccord("movie");
                }
              }}
            >
              {city}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="movie">
        <AccordionTrigger
          className="text-xl"
          onClick={() => setSelectDisplayAccord("movie")}
        >
          Chọn phim{" "}
          {selectedMovie && selectedMovie.id !== -1
            ? " - " + selectedMovie.title
            : ""}
        </AccordionTrigger>
        <AccordionContent>
          <Carousel className="w-full relative">
            <CarouselContent>
              {movies.slice(0, 8).map((movie: Movies) => (
                <CarouselItem
                  key={movie.id}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4 xl:basis-1/4"
                >
                  <div className="flex flex-col items-center cursor-pointer">
                    <div
                      className="w-full aspect-[2/3] bg-gray-100 rounded overflow-hidden flex items-center justify-center relative"
                      onClick={() => {
                        setSelectedMovie(movie);
                        setSelectedShowtime("");
                        setSelectDisplayAccord("showtime");
                      }}
                    >
                      <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="object-cover w-full h-full"
                      />
                      {selectedMovie && selectedMovie.id === movie.id && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <svg
                            className="w-16 h-16 text-white bg-[#F1B4BB] rounded-full p-2 border-4 border-[#F1B4BB]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path
                              d="M9 12l2 2l4-4"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-center text-sm font-medium line-clamp-2">
                      {movie.title}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-amber-50 left-2 size-10 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="bg-amber-50 right-2 size-10 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="showtime">
        <AccordionTrigger className="text-xl">Chọn suất</AccordionTrigger>
        <AccordionContent>
          <div className="mb-4 flex gap-2">
            {DATES.map((d) => (
              <Button
                key={d.value}
                variant={selectedDate === d.value ? "default" : "outline"}
                className={`rounded ${
                  selectedDate === d.value ? "bg-[#1F4172] text-white" : ""
                }`}
                onClick={() => setSelectedDate(d.value)}
              >
                <div className="flex flex-col items-center">
                  <span>{d.label}</span>
                  <span className="text-xs">
                    {d.value.slice(5).replace("-", "/")}
                  </span>
                </div>
              </Button>
            ))}
            <select
              className="ml-auto border rounded px-2 py-1 h-10"
              value={selectedTheater}
              onChange={(e) => setSelectedTheater(e.target.value)}
              title="Chọn rạp"
            >
              <option value="">Tất cả các rạp</option>
              {theaters
                .filter((t) => !selectedCity || t.location === selectedCity)
                .map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="divide-y">
            {theaters
              .filter((t) => !selectedCity || t.location === selectedCity)
              .filter((t) => !selectedTheater || t.name === selectedTheater)
              .map((theater) => (
                <div key={theater.id} className="py-4">
                  <div className="font-semibold">{theater.name}</div>
                  <div className="text-gray-500 text-sm mb-2">2D Phụ Đề</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["13:15", "14:45", "20:15", "21:30"].map((time) => (
                      <Button
                        key={time + theater.id}
                        variant={
                          selectedShowtime === time + theater.id
                            ? "default"
                            : "outline"
                        }
                        className={`rounded px-4 ${
                          selectedShowtime === time + theater.id
                            ? "bg-[#1F4172] text-white"
                            : ""
                        } cursor-pointer`}
                        onClick={() => {
                          setSelectedShowtime(time + theater.id);
                          setSelectedTheater(theater.name);
                        }}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SelectLocationAccordion;
