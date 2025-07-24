"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useDeleteUser } from "@/components/hooks/useMutation";
import type { User } from "@/components/interface/user";


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Số Điện Thoại",
  },
  {
    accessorKey: "name",
    header: "Tên",
  },
  {
    accessorKey: "gender",
    header: "Giới Tính",
  },
  {
    accessorKey: "role",
    header: "Quyền",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const { mutate: deleteUser } = useDeleteUser()
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
              <Link to={`/admin/user/edit/${user.id}`}><Pencil className="text-yellow-500"/>Chỉnh Sửa</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#CC9999] hover:text-white" onClick={() => deleteUser(user.id)}>
              <Trash2 className="text-red-500"/> Xóa
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
