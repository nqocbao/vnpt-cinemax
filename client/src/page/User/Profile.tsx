import {
  useUpdateCustomer,
  useUpdateUser,
} from "@/components/hooks/useMutation";
import {
  useCustomer,
  useMovies,
  useTicket,
  useUser,
} from "@/components/hooks/useQuery";
import type { GroupedTicket, Ticket } from "@/components/interface/tickets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/layouts/MainLayout";
import {
  Award,
  Camera,
  ChevronRight,
  Locate,
  Lock,
  Mail,
  Medal,
  Phone,
  Recycle,
  User,
  User2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const Profile = () => {
  const id = localStorage.getItem("userId");
  const userId = Number(id);
  const [filtered, setFiltered] = useState("");
  const { data: user } = useUser(userId);
  const { data: customer } = useCustomer(userId);
  const { data: tickets } = useTicket(userId);
  const { data: movies } = useMovies();
  const { mutate: userUpdate } = useUpdateUser("profile");
  const { mutate: customerUpdate } = useUpdateCustomer();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (user && customer) {
      reset({
        email: user.email,
        name: user.name,
        phone: user.phone,
        password: user.password,
        gender: user.gender,
        role: user.role,
        city: customer.city,
      });
    }
  }, [user, customer, reset]);
  const onSubmit = (data: any) => {
    userUpdate({ ...data, id: user.id });
    customerUpdate({ ...data, id: customer.id });
  };
  const groupedTickets = tickets?.reduce((acc, ticket) => {
    const { bookingCode } = ticket;
    const movie = movies?.find((m) => m.id === ticket.movieId);
    if (!acc[bookingCode]) {
      acc[bookingCode] = {
        bookingCode,
        movieTitle: movie?.title,
        status: ticket.status,
        seats: [`${ticket.seat.seatRow}${ticket.seat.seatNumber}`],
        totalPrice: ticket.price,
      };
    } else {
      acc[bookingCode].seats.push(
        `${ticket.seat.seatRow}${ticket.seat.seatNumber}`
      );
      acc[bookingCode].totalPrice += ticket.price;
    }
    return acc;
  }, {});
  const ticketList: GroupedTicket[] = groupedTickets
    ? Object.values(groupedTickets)
    : [];

  const filteredTickets: GroupedTicket[] = ticketList.filter((ticket) =>
    ticket.bookingCode?.toLowerCase().includes(filtered?.toLowerCase())
  );
  return (
    <MainLayout>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-6 px-4 md:px-8 lg:grid lg:grid-cols-12 gap-8 space-y-6">
          <div className="bg-white col-span-4 lg:shadow-2xl rounded px-3 md:px-8 py-10 space-y-6">
            <div className="flex items-center justify-center gap-6 my-6">
              <div className="p-6 bg-gray-200 rounded-[50%]">
                <Camera />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-700" />
                  {user && <span className="font-semibold">{user.name}</span>}
                </div>
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-orange-700" />
                  <span>0 Starts</span>
                </div>
              </div>
            </div>
            <div className="space-y-6 my-20 ">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-600">
                  Tổng chi tiêu 2025
                </p>
                <span className="text-[#8B008B] font-semibold">0 đ</span>
              </div>
              <div className="relative w-full space-y-6">
                <div className="flex justify-between w-full px-4 items-center">
                  <div className="relative">
                    <div className="bg-yellow-400 p-2 rounded-full border border-yellow-500">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-yellow-400 p-2 rounded-full border border-yellow-500">
                      <Recycle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-orange-400 p-2 rounded-full border border-orange-500">
                      <Medal className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <Slider
                  defaultValue={[0]}
                  max={4000000}
                  min={0}
                  step={2000000}
                  className="w-full bg-[#d0e3ed] [&_[role=slider]]:bg-white"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0 ₫</span>
                  <span>2.000.000 ₫</span>
                  <span>4.000.000 ₫</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <h3 className="font-semibold text-sm md:text-base">
                HOTLINE hỗ trợ:{" "}
                <span className="text-blue-700">19002224 (9:00 - 22:00)</span>
              </h3>
              <ChevronRight className="text-gray-500 w-5 h-5" />
            </div>
            <div className="border border-[#ccc]"></div>
            <div className="flex justify-between">
              <h3 className="font-semibold text-sm md:text-base">
                Email:{" "}
                <span className="text-blue-700">hotro@cinemaxstudio.vn</span>
              </h3>
              <ChevronRight className="text-gray-500 w-5 h-5" />
            </div>
            <div className="border border-[#ccc]"></div>
            <div className="flex justify-between">
              <h3 className="font-semibold text-sm md:text-base">
                Câu hỏi thường gặp
              </h3>
              <ChevronRight className="text-gray-500 w-5 h-5" />
            </div>
          </div>
          <div className="bg-white col-span-8 lg:shadow-2xl rounded px-3 md:px-8 p-10">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="flex flex-wrap flex-row justify-between w-full my-6">
                <TabsTrigger
                  value="profile"
                  className="!shadow-none text-base text-lg text-gray-500 data-[state=active]:text-[#8B008B] cursor-pointer"
                >
                  Thông Tin Cá Nhân
                </TabsTrigger>
                <TabsTrigger
                  value="transaction"
                  className="!shadow-none text-base text-lg text-gray-500 data-[state=active]:text-[#8B008B] cursor-pointer"
                >
                  Lịch Sử Giao Dịch
                </TabsTrigger>
                <TabsTrigger
                  value="notify"
                  className="!shadow-none text-base text-lg text-gray-500 data-[state=active]:text-[#8B008B] cursor-pointer hidden md:flex"
                >
                  Thông Báo
                </TabsTrigger>
                <TabsTrigger
                  value="reward"
                  className="!shadow-none text-base text-lg text-gray-500 data-[state=active]:text-[#8B008B] cursor-pointer hidden md:flex"
                >
                  Quà Tặng
                </TabsTrigger>
                <TabsTrigger
                  value="policy"
                  className="!shadow-none text-base text-lg text-gray-500 data-[state=active]:text-[#8B008B] cursor-pointer hidden md:flex"
                >
                  Chính Sách
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="my-2">
                        <span className="text-red-600">*</span> Họ tên
                      </Label>
                      <div className="relative">
                        <User2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                        <Input
                          type="text"
                          placeholder="Trương Quân"
                          className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                          {...register("name", { required: true })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="my-2">
                        <span className="text-red-600">*</span> Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                        <Input
                          type="email"
                          placeholder="quantmph30701@fpt.edu.vn"
                          className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                          {...register("email", { required: true })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="my-2">
                        <span className="text-red-600">*</span> Số điện thoại
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                        <Input
                          type="phone"
                          placeholder="098112253"
                          className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                          {...register("phone", { required: true })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="password" className="my-2">
                        <span className="text-red-600">*</span> Mật khẩu
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                        <Input
                          type="password"
                          placeholder="************"
                          className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                          {...register("password", { required: true })}
                        />
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="absolute text-[#8B008B] right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs cursor-pointer">
                              Thay đổi
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white">
                            <DialogHeader>
                              <DialogTitle>
                                <h1 className="">Đổi Mật Khẩu</h1>
                              </DialogTitle>
                              <DialogDescription className="space-y-4">
                                <form>
                                  <div>
                                    <Label
                                      htmlFor="password"
                                      className="my-2 text-gray-500"
                                    >
                                      <span className="text-red-600">*</span>{" "}
                                      Mật khẩu hiện tại
                                    </Label>
                                    <div className="relative">
                                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                      <Input
                                        type="password"
                                        placeholder="************"
                                        className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <Label
                                      htmlFor="password"
                                      className="my-2 text-gray-500"
                                    >
                                      <span className="text-red-600">*</span>{" "}
                                      Mật khẩu mới
                                    </Label>
                                    <div className="relative">
                                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                      <Input
                                        type="password"
                                        placeholder="************"
                                        className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <Label
                                      htmlFor="password"
                                      className="my-2 text-gray-500"
                                    >
                                      <span className="text-red-600">*</span>{" "}
                                      Xác nhận mật khẩu mới
                                    </Label>
                                    <div className="relative">
                                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                      <Input
                                        type="password"
                                        placeholder="************"
                                        className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                                      />
                                    </div>
                                  </div>
                                  <Button className="w-full bg-[#8B008B] text-white cursor-pointer hover:opacity-80 my-2">
                                    CẬP NHẬT
                                  </Button>
                                </form>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name" className="my-2">
                        <span className="text-red-600">*</span>Tỉnh/Thành phố
                      </Label>
                      <div className="relative">
                        <Locate className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                        <Input
                          type="text"
                          placeholder="Hà Nội"
                          className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                          {...register("city", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-8">
                      <Label htmlFor="password" className="my-2">
                        <span className="text-red-600">*</span> Giới tính
                      </Label>
                      <RadioGroup
                        disabled
                        defaultValue="boy"
                        className="flex flex-row"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="boy" id="boy" />
                          <Label htmlFor="boy">Nam</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="girl" id="girl" />
                          <Label htmlFor="girl">Nữ</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <Button className="bg-[#8B008B] text-white hover:bg-[#6A006A] cursor-pointer">
                      Cập Nhật
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="transaction">
                <Input
                  type="text"
                  value={filtered}
                  onChange={(e) => setFiltered(e.target.value)}
                  placeholder="Tìm kiếm hóa đơn...."
                  className="focus-visible:ring-0"
                />
                <Table>
                  <TableCaption>Danh Sách Giao Dịch</TableCaption>
                  <TableHeader className="hidden md:table-header-group">
                    <TableRow>
                      <TableHead className="w-[100px]">Hóa Đơn</TableHead>
                      <TableHead>Tên Phim</TableHead>
                      <TableHead>Số Ghế</TableHead>
                      <TableHead className="text-right">Tổng</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket: any) => (
                      <TableRow
                        className="block md:table-row"
                        key={ticket.bookingCode}
                      >
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Hóa_Đơn:_'] md:before:content-none">
                          {ticket.bookingCode}
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Tên_Phim:_'] md:before:content-none">
                          {ticket.movieTitle}
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium block md:table-cell before:content-['Số_Ghế:_'] md:before:content-none">
                          {ticket.seats.join(",")}
                        </TableCell>
                        <TableCell className="text-gray-600 md:font-medium text-right block md:table-cell before:content-['Tổng:_'] md:before:content-none">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(ticket.totalPrice)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="notify">Chưa có thông báo</TabsContent>
              <TabsContent value="reward">Chưa có quà tặng nào</TabsContent>
              <TabsContent value="policy">Chưa có chính sách nào</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
