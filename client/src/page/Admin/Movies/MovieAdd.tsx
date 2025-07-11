import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { CalendarIcon } from "lucide-react";
import React from "react";

import { useAddMovie } from "@/components/hooks/useMutation";
import type { Movies } from "@/components/interface/movies";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

const MovieAdd = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [valueDisplay, setValueDisplay] = React.useState(formatDate(date));

  const { mutate } = useAddMovie();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Movies>({
    defaultValues: {
      title: "",
      runningTime: 0,
      genre: "",
      director: "",
      cast: "",
      content: "",
      language: "",
      releaseDate: "",
      posterUrl: "",
    },
  });

  const onSubmit = (movie: Movies) => {
    mutate(movie);
  };
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-center text-2xl font-medium">
          <i>Tạo phim mới</i>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-sm text-red-500">Vui lòng nhập tiêu đề</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="running-time">Running time</Label>
            <Input
              className="focus-visible:ring-0"
              type="number"
              id="running-time"
              {...register("runningTime", { required: true })}
            />
            {errors.runningTime && (
              <p className="text-sm text-red-500">Vui lòng nhập thời lượng</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="genre"
              {...register("genre", { required: true })}
            />
            {errors.genre && (
              <p className="text-sm text-red-500">Vui lòng nhập thể loại</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="director">Director</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="director"
              {...register("director", { required: true })}
            />
            {errors.director && (
              <p className="text-sm text-red-500">Vui lòng nhập tên đạo diễn</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cast">Cast</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="cast"
              {...register("cast", { required: true })}
            />
            {errors.cast && (
              <p className="text-sm text-red-500">
                Vui lòng nhập tên diễn viên
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="language"
              {...register("language", { required: true })}
            />
            {errors.language && (
              <p className="text-sm text-red-500">Vui lòng nhập quốc gia</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="date">Release date</Label>
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
                    <span className="sr-only">Select date</span>
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
                Vui lòng chọn ngày phát hành
              </p>
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              className="focus-visible:ring-0"
              type="text"
              id="age"
              {...register("ageLimit", { required: true })}
            />
            {errors.ageLimit && (
              <p className="text-sm text-red-500">Vui lòng nhập tuổi</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              className="h-30 focus-visible:ring-0"
              {...register("content", { required: true })}
            />
            {errors.content && (
              <p className="text-sm text-red-500">Vui lòng nhập mô tả</p>
            )}
          </div>
          <div className="space-x-4">
            <Button className="bg-blue-600 text-white hover:opacity-80 cursor-pointer my-4">
              <Link to='/admin/movie'>Quay Lại</Link>
            </Button>
            <Button className="bg-[#4CAF50] text-white hover:bg-[#45a049] cursor-pointer my-4">
              Tạo
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieAdd;
