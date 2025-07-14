import AuthDialog from "@/components/custom/AuthDialog";
import { useMovieDetail, useMovies, useTheaters } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import type { Theater } from "@/components/interface/theaters";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [dialogOpen, setDialogOpen] = useState(true);
  const { data: movie, isLoading, isError, error } = useMovieDetail(id);
  const { data: movies } = useMovies();
  const { data: theaters } = useTheaters()

  if (isLoading || isError)
    return (
      <AuthDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        type={isLoading ? "loading" : "error"}
        action="login"
        message={isError ? error.message : ""}
      />
    );
  const scrollLeft = () => {
    api?.scrollPrev();
  };

  const scrollRight = () => {
    api?.scrollNext();
  };
  return (
    <div className="max-w-screen-xl mx-auto py-2 px-2 md:px-4 xl:px-8">
      <div className="flex justify-between gap-8">
        {/* Thông Tin */}
        {movie && (
          <div className="w-full lg:w-2/3 space-y-12">
            {/* Thông Tin Phim */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-2/3 mx-auto md:mx-0 md:w-1/3">
                <img
                  src={movie.posterUrl}
                  alt=""
                  className="w-full object-cover h-auto rounded"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black-10 mr-4">
                    {movie.title}
                  </h1>
                  <span className="bg-red-700 text-white p-1 md:p-2 rounded-md">
                    C18
                  </span>
                </div>
                <div className="flex flex-wrap space-x-6">
                  <div className="flex items-center space-x-1 text-sm">
                    <Clock className="text-yellow-500" />
                    <span className="text-gray-700">
                      {movie.runningTime} Phút
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Calendar className="text-yellow-500" />
                    <span className="text-gray-700">{movie.releaseDate}</span>
                  </div>
                </div>
                <div className="text-sm flex gap-1">
                  <span className="text-gray-500">Quốc gia: </span>
                  <span className="text-gray-700">{movie.language}</span>
                </div>
                <div className="text-sm flex gap-1">
                  <span className="text-gray-500">Nhà sản xuất: </span>
                  <span className="text-gray-700">{movie.director}</span>
                </div>

                <div className="text-sm flex gap-1 ">
                  <span className="text-gray-500">Thể loại: </span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    <li className="inline-block">
                      <a
                        href="#"
                        className="text-gray-800 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2"
                      >
                        {movie.genre}
                      </a>
                    </li>
                    
                  </ul>
                </div>

                <div className="text-sm flex gap-1 ">
                  <span className="text-gray-500">Đạo diễn: </span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    <li className="inline-block">
                      <Link
                        to="#"
                        className="text-gray-800 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2"
                      >
                        {movie.director}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-sm flex gap-1">
                  <span className="text-gray-500">Diễn viên:</span>
                  <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                    {movie.cast
                      ?.split(",")
                      .map((actor: string, index: number) => (
                        <li className="inline-block" key={index}>
                          <a
                            href="#"
                            className="text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2"
                          >
                            {actor.trim()}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* End */}

            {/* Nội Dung Phim */}
            <div>
              <div className="mb-4">
                <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
                <h1 className="text-base inline-block font-semibold">
                  NỘI DUNG PHIM
                </h1>
              </div>
              <div className="">
                {movie && <p className="text-gray-700">{movie.content}</p>}
              </div>
            </div>
            {/* End */}

            {/* Lịch chiếu */}
            <div>
              <div className="mb-8">
                <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
                <h1 className="text-base inline-block font-semibold">
                  LICH CHIẾU
                </h1>
              </div>
              <div>
                <Tabs defaultValue="monday" className="space-y-8 relative">
                  <Carousel setApi={setApi}>
                    <TabsList className="flex w-full px-2">
                      <CarouselContent>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="monday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Hai</p>
                            <span>23/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="tuesday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Ba</p>
                            <span>24/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="wednesday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Tư</p>
                            <span>25/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="thurday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Năm</p>
                            <span>26/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="friday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Sáu</p>
                            <span>27/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="saturday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Thứ Bảy</p>
                            <span>28/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <TabsTrigger
                            value="sunday"
                            className="text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap"
                          >
                            <p>Chủ Nhật</p>
                            <span>29/06</span>
                          </TabsTrigger>
                        </CarouselItem>
                      </CarouselContent>
                    </TabsList>
                    <ChevronLeft
                      onClick={scrollLeft}
                      className="absolute w-6 md:bg-transparenth-6 left-0 top-1/2 -translate-y-1/2 z-30 flex"
                    />
                    <ChevronRight
                      onClick={scrollRight}
                      className="absolute w-6 md:bg-transparenth-6 right-0 top-1/2 -translate-y-1/2 z-30 flex"
                    />
                  </Carousel>
                  <div className="border-b-[3px] border-b-[#8B008B]"></div>
                  <TabsContent value="monday" className="space-y-8">
                    {theaters?.map((theater: Theater) => (
                      <div key={theater.id}>
                        <h1 className="text-base font-semibold mb-4">
                          {theater.name}
                        </h1>
                        <div className="space-y-2">
                          <div className="flex md:flex-row flex-col gap-2 md:items-center">
                            <span className="text-gray-500">2D Phụ Đề:</span>
                            <ul className="md:ml-2 flex flex-wrap gap-1 flex-1">
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  16:30
                                </a>
                              </li>
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  22:45
                                </a>
                              </li>
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  23:45
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="flex md:flex-row flex-col gap-2 md:items-center">
                            <span className="text-gray-500">3D:</span>
                            <ul className="md:ml-2 flex flex-wrap gap-1 flex-1">
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  10:30
                                </a>
                              </li>
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  13:45
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="tuesday" className="space-y-8">
                    {theaters?.map((theater: any) => (
                      <div>
                        <h1 className="text-base font-semibold mb-4">
                          {theater.name}
                        </h1>
                        <div className="space-y-2">
                          <div className="flex md:flex-row flex-col gap-2 md:items-center">
                            <span className="text-gray-500">2D Phụ Đề:</span>
                            <ul className="md:ml-2 flex flex-wrap gap-1 flex-1">
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  10:30
                                </a>
                              </li>
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  11:45
                                </a>
                              </li>
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  20:45
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="flex md:flex-row flex-col gap-2 md:items-center">
                            <span className="text-gray-500">3D:</span>
                            <ul className="md:ml-2 flex flex-wrap gap-1 flex-1">
                              <li className="inline-block">
                                <a
                                  href="#"
                                  className="text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2"
                                >
                                  13:45
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            {/* End */}
          </div>
        )}
        {/* End */}

        {/* Phim Đang Chiếu*/}
        <div className="space-y-4 hidden lg:block lg:w-1/3">
          <div className="">
            <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
            <h1 className="text-xl inline-block font-semibold">
              PHIM ĐANG CHIẾU
            </h1>
          </div>
          {movies
            ?.filter((item: Movies) => Number(item.id) % 2 === 1)
            .map(
              (item: Movies, index: number) =>
                index < 3 && (
                  <div className="space-y-2">
                    <Link to={`/detail/${item.id}`}>
                      <img
                        src={item.posterUrl}
                        alt=""
                        className="w-full max-h-[230px] rounded-lg hover:opacity-80"
                      />
                    </Link>
                    <p className="font-semibold">
                      <Link to={`/detail/${item.id}`}>{item.title}</Link>
                    </p>
                  </div>
                )
            )}

          <div className="flex flex-col items-center">
            <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer">
              <Link to="/now-movies">Xem Thêm</Link>
            </Button>
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default MovieInfo;
