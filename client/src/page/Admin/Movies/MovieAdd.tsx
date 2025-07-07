import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  const [value, setValue] = React.useState(formatDate(date));
  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-center text-2xl font-medium">
          <i>Thêm phim mới</i>
        </h1>
      </div>
      <div className="block md:grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input className="focus-visible:ring-0" type="text" id="title"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="running-time">Running time</Label>
          <Input className="focus-visible:ring-0" type="number" id="running-time"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Input className="focus-visible:ring-0" type="text" id="genre"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input className="focus-visible:ring-0" type="text" id="director"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="cast">Cast</Label>
          <Input className="focus-visible:ring-0" type="text" id="cast"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Input className="focus-visible:ring-0" type="text" id="language"></Input>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="cast">Release date</Label>
          <div className="relative flex gap-2">
            <Input
              id="date"
              value={value}
              placeholder="June 01, 2025"
              className="bg-background pr-10 focus-visible:ring-0"
              onChange={(e) => {
                const date = new Date(e.target.value);
                setValue(e.target.value);
                if (isValidDate(date)) {
                  setDate(date);
                  setMonth(date);
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
                    setValue(formatDate(date));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="poster">Poster</Label>
          <Input className="focus-visible:ring-0" type="file" id="poster"></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" className="h-30 focus-visible:ring-0" />
        </div>
      </div>
      <div>
        <Button className="bg-[#4CAF50] text-white hover:bg-[#45a049]">
          <Link to="/admin/movie">Thêm Phim</Link>
        </Button>
      </div>
    </div>
  );
};

export default MovieAdd;
