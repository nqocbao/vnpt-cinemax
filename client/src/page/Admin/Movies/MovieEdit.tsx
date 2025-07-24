import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CalendarIcon } from "lucide-react";
import React, { useEffect } from "react";

import { useUpdateMovie } from "@/components/hooks/useMutation";
import { useMovieAdminDetail } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { movieSchema, type MovieForm } from "@/validation/movieSchema";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

const MovieEdit = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [valueDisplay, setValueDisplay] = React.useState(formatDate(date));
  const { data: movie } = useMovieAdminDetail(id);
  const { mutate } = useUpdateMovie();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<MovieForm>({
    resolver: zodResolver(movieSchema)
  });

  useEffect(() => {
    if (movie) {
      const releaseDate = new Date(movie.releaseDate);
      reset({
        title: movie.title,
        trailerUrl: movie.trailerUrl,
        runningTime: movie.runningTime,
        genre: movie.genre,
        director: movie.director,
        cast: movie.cast,
        content: movie.content,
        language: movie.language,
        ageLimit: movie.ageLimit,
        posterUrl: movie.posterUrl,
        releaseDate: releaseDate.toISOString(),
      });
      setDate(releaseDate);
      setMonth(releaseDate);
      setValueDisplay(formatDate(releaseDate));
    }
  }, [movie, reset]);

  const posterUrl = watch("posterUrl");

  const onSubmit = (data: Movies) => {
    mutate({ ...data, id: movieId });
  };
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-center text-2xl font-medium">
          <i>Chỉnh sửa phim</i>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="block md:grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Tên phim</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="running-time">Thời lượng</Label>
            <Input
              className="focus-visible:ring-0"
              type="number"
              id="running-time"
              {...register("runningTime", { valueAsNumber: true })}
            />
            {errors.runningTime && (
              <p className="text-sm text-red-500">{errors.runningTime.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="genre">Thể loại</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="genre"
              {...register("genre", { required: true })}
            />
            {errors.genre && (
              <p className="text-sm text-red-500">{errors.genre.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="director">Đạo diễn</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="director"
              {...register("director", { required: true })}
            />
            {errors.director && (
              <p className="text-sm text-red-500">{errors.director.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cast">Diễn viên</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="cast"
              {...register("cast", { required: true })}
            />
            {errors.cast && (
              <p className="text-sm text-red-500">
                {errors.cast.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Quốc gia</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="language"
              {...register("language", { required: true })}
            />
            {errors.language && (
              <p className="text-sm text-red-500">{errors.language.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="date">Ngày phát hành</Label>
            <div className="relative flex gap-2">
              <Input
                id="date"
                value={valueDisplay}
                placeholder="June 01, 2025"
                className="bg-background pr-10 focus-visible:ring-0"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setValueDisplay(e.target.value);
                  if (isValidDate(date)) {
                    setDate(date);
                    setMonth(date);
                    setValue("releaseDate", date.toISOString());
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setOpen(true);
                  }
                }}
              />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Chọn ngày</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0 bg-white"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(date) => {
                      setDate(date);
                      setValue("releaseDate", date?.toISOString() || "");
                      setValueDisplay(formatDate(date));
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Input
              type="hidden"
              {...register("releaseDate", { required: true })}
            />
            {errors.releaseDate && (
              <p className="text-sm text-red-500">
                {errors.releaseDate.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Trailer</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="title"
              {...register("trailerUrl", { required: true })}
            />
            {errors.trailerUrl && (
              <p className="text-sm text-red-500">{errors.trailerUrl.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Tuổi</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="age"
              {...register("ageLimit", { required: true })}
            />
            {errors.ageLimit && (
              <p className="text-sm text-red-500">{errors.ageLimit.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="poster">Poster</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="poster"
              {...register("posterUrl", { required: true })}
            />
            {errors.posterUrl && (
              <p className="text-sm text-red-500">{errors.posterUrl.message}</p>
            )}
            <img src={posterUrl} alt="" className="w-30 h-20" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Nội dung</Label>
            <Textarea
              id="content"
              className="h-30 focus-visible:ring-0"
              {...register("content", { required: true })}
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>
        </div>
        <div className="space-x-4">
          <Button className="bg-blue-600 text-white hover:opacity-80 cursor-pointer my-4">
            <Link to="/admin/movie">Quay Lại</Link>
          </Button>
          <Button
            type="submit"
            className="bg-[#4CAF50] text-white hover:bg-[#45a049]"
          >
            Cập Nhật
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MovieEdit;
