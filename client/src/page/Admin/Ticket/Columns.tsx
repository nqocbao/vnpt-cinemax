"use client";

import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import type { GroupedTicket } from "@/components/interface/tickets";


export const columns: ColumnDef<GroupedTicket>[] = [
  {
    accessorKey: "bookingCode",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hóa Đơn
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "userName",
    header: "Người đặt",
  },
  {
    accessorKey: "movieTitle",
    header: "Tên Phim",
  },
  {
    accessorKey: "seats",
    header: "Số Ghế",
  },
  {
    accessorKey: "totalPrice",
    header: "Tổng",
    cell: ({ row }) =>
      new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(row.original.totalPrice),
  },

];
