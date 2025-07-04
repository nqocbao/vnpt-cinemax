import AuthDialog from "@/components/custom/AuthDialog";
import { useMovies } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Video } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MovieList = () => {
  const [dialogOpen, setDialogOpen] = useState(true);
  const [tab, setTab] = useState('nowPlaying')
  const navigate = useNavigate();
  const { data: movies, isLoading, isError, error } = useMovies();

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

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-8 md:my-14">
        <div className="my-8 md:my-14">
          <div className="lg:ml-3 px-4">
            <Tabs defaultValue="nowPlaying" value={tab} onValueChange={setTab} className="w-full space-y-6">
              <TabsList className="md:gap-x-8 gap-x-6 flex flex-wrap justify-start">
                <h1 className="text-2xl font-semibold border-l-[4px] border-l-[#8B008B] pl-3 hidden md:flex">
                  PHIM
                </h1>
                <TabsTrigger
                  value="nowPlaying"
                  className="text-gray-500 data-[state=active]:text-[#8B008B] data-[state=active]:border-b-2 hover:text-[#8B008B] px-2 py-2 rounded-none text-sm md:text-base !shadow-none cursor-pointer"
                >
                  Đang Chiếu
                </TabsTrigger>
                <TabsTrigger
                  value="comingSoon"
                  className="text-gray-500 data-[state=active]:text-[#8B008B] data-[state=active]:border-b-2 hover:text-[#8B008B] px-2 py-2 rounded-none text-sm md:text-base !shadow-none cursor-pointer"
                >
                  Sắp Chiếu
                </TabsTrigger>
              
              </TabsList>
              {/* Phim Đang Chiếu */}
              <TabsContent
                value="nowPlaying"
                className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
              >
                {movies
                  ?.filter((movie: Movies) => Number(movie.id) % 2 === 1)
                  .map(
                    (movie: any, index: number) =>
                      index < 8 && (
                        <div className="space-y-2 group relative">
                          <div className="absolute top-2 left-2 bg-red-700 text-white p-1 md:p-2 rounded-md">
                            C18
                          </div>
                          <img
                            src={movie.posterUrl}
                            alt=""
                            className="rounded-2xl group-hover:blur-xs duration-300 w-full h-[220px] md:h-[280px] lg:h-[420px] object-cover"
                          />
                          <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer">
                              <Star className="w-4 h-4 mr-1 hidden sm:flex" />
                              Mua vé
                            </Button>
                            <Button
                              className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                              onClick={() => navigate(`/detail/${movie.id}`)}
                            >
                              <Video />
                              Trailer
                            </Button>
                          </div>
                          <p className="font-bold truncate text-sm md:text-base md:block text-gray-600 hover:text-blue-600 cursor-pointer">
                            {movie.title}
                          </p>
                        </div>
                      )
                  )}
              </TabsContent>
              {/* End */}

              {/* Phim Sắp Chiếu */}
              <TabsContent
                value="comingSoon"
                className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
              >
                {movies
                  ?.filter((movie: any) => Number(movie.id) % 2 === 0)
                  .map(
                    (movie: any, index: number) =>
                      index < 8 && (
                        <div className="space-y-2 group relative">
                          <div className="absolute top-2 left-2 bg-red-700 text-white p-1 md:p-2 rounded-md">
                            C18
                          </div>
                          <img
                            src={movie.posterUrl}
                            alt=""
                            className="rounded-2xl group-hover:blur-xs duration-300 w-full h-[220px] md:h-[280px] lg:h-[420px] object-cover"
                          />
                          <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer">
                              <Star className="w-4 h-4 mr-1 hidden sm:flex" />
                              Mua vé
                            </Button>
                            <Button
                              className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                              onClick={() => navigate(`/detail/${movie.id}`)}
                            >
                              <Video />
                              Trailer
                            </Button>
                          </div>
                          <p className="font-bold truncate text-sm md:text-base md:block text-gray-600 hover:text-blue-600 cursor-pointer">
                            {movie.title}
                          </p>
                        </div>
                      )
                  )}
              </TabsContent>

              {/* End */}
            </Tabs>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer" onClick={() => navigate(tab === "nowPlaying" ? "/now-movies" : "/coming-movies")}>
            Xem Thêm
          </Button>
        </div>
      </div>
      <div className="border-b-[6px] border-b-[#f4f4f4]"></div>
    </div>
  );
};

export default MovieList;
