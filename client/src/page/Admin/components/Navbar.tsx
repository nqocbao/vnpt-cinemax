import { useUser } from "@/components/hooks/useQuery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const id = localStorage.getItem("userId") || undefined;
  const { data: users } = useUser(id);

  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <Button
          className="mr-4 p-2 rounded bg-white cursor-pointer hidden md:block"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {/* Icon menu */}
          <Menu />
        </Button>
        {/* Search input */}
        <Input
          type="text"
          placeholder="Tìm kiếm..."
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
        />

        <div className="relative">
          <div className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            {users && (
              <span className="font-medium text-gray-700">{users.name}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
