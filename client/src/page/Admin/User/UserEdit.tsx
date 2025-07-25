import { useUpdateUser } from "@/components/hooks/useMutation";
import { useUserAdminDetail } from "@/components/hooks/useQuery";
import type { User } from "@/components/interface/user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const UserEdit = () => {
  const { id } = useParams();
  const userId = Number(id);
  const { data: user } = useUserAdminDetail(id);
  const { mutate } = useUpdateUser("admin");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<User>();

  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        name: user.name,
        phone: user.phone,
        gender: user.gender,
        role: user.role,
      });
    }
  }, [user, reset]);

  const onSubmit = (user: User) => {
    mutate({ ...user, id: userId });
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-center text-2xl font-medium">
          <i>Chỉnh sửa người dùng</i>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="focus-visible:ring-0"
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="running-time">Name</Label>
          <Input
            className="focus-visible:ring-0"
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Phone</Label>
          <Input
            className="focus-visible:ring-0"
            type="number"
            id="phone"
            pattern="[0-9]"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={watch("gender")} onValueChange={() => {}} disabled>
            <SelectTrigger className="w-full bg-gray-100 cursor-not-allowed">
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select value={watch("role")} onValueChange={() => {}} disabled>
            <SelectTrigger className="w-full bg-gray-100 cursor-not-allowed">
              <SelectValue placeholder="Chọn vai trò" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button
            className="bg-[#4CAF50] text-white hover:bg-[#45a049]"
            type="submit"
          >
            Cập Nhật
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
