"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Movies } from "@/components/interface/movies";
import { useDeleteMovie } from "@/components/hooks/useMutation";
import { Link } from "react-router-dom";

export const columns: ColumnDef<Movies>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "runningTime",
    header: "Running Time",
  },
  {
    accessorKey: "releaseDate",
    header: "Release Date",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "cast",
    header: "Cast",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { mutate: deleteMovie } = useDeleteMovie();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white relative w-50">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="hover:bg-[#CC9999] hover:text-white"
              onClick={() => navigator.clipboard.writeText(String(user.id))}
            >
              <Link to={`edit/${user.id}`}>Update</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-[#CC9999] hover:text-white"
              onClick={() => deleteMovie(user.id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
