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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lock, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center mb-6 -mt-10 mx-5 md:mx-0">
        <Tabs
          defaultValue="login"
          className="w-full max-w-[560px] min-h-[400px] mx-auto px-2"
        >
          {/* Navigate */}
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-blue-800 data-[state=active]:text-white p-2 border border-b-[#ccc] rounded-none cursor-pointer text-sm md:text-base"
            >
              ĐĂNG NHẬP
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-blue-800 data-[state=active]:text-white p-2 border border-b-[#ccc] rounded-none cursor-pointer text-sm md:text-base"
            >
              ĐĂNG KÝ
            </TabsTrigger>
          </TabsList>
          {/* End Navigate */}

          {/* Login */}
          <TabsContent
            value="login"
            className="space-y-6 px-6 rounded-lg shadow-md py-12"
          >
            <div className="space-y-2">
              <Label htmlFor="email">
                <span className="text-red-600">*</span> Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                <span className="text-red-600">*</span> Mật khẩu
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <Input
                  type="password"
                  placeholder="Mật khẩu"
                  className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="text-blue-600 text-sm hover:underline block text-left">
              <Link to="#">Quên mật khẩu?</Link>
            </div>
            <div className="flex flex-col items-center space-y-3 mt-6">
              <Button className="bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg hover:text-white cursor-pointer text-sm md:text-base">
                Đăng Nhập
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <a>Hoặc</a>
            </div>
            <div className="items-center justify-center flex space-x-5 text-3xl md:text-4xl">
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-red-600 hover:scale-110 transition duration-300 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-600 hover:scale-110 transition duration-300 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-sky-400 hover:scale-110 transition duration-300 cursor-pointer"
              />
            </div>
          </TabsContent>
          {/* End Login */}

          {/* Register */}
          <TabsContent
            value="register"
            className="px-6 py-12 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="my-2">
                    <span className="text-red-600">*</span> Họ tên
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Họ tên"
                      className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
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
                      placeholder="Email"
                      className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
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
                      placeholder="Số điện thoại"
                      className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
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
                      placeholder="Mật khẩu"
                      className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="my-2">
                    <span className="text-red-600">*</span> Xác nhận mật khẩu
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                    <Input
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="sex" className="my-2">
                    <span className="text-red-600">*</span> Giới tính
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Select>
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Giới tính" />
                      </SelectTrigger>
                      <SelectContent className="z-50 max-h-[100px] overflow-y-auto bg-white shadow-md">
                        <SelectItem
                          value="boy"
                          className="hover:bg-blue-600 hover:text-white"
                        >
                          Nam
                        </SelectItem>
                        <SelectItem
                          value="girl"
                          className="hover:bg-blue-600 hover:text-white"
                        >
                          Nữ
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="hover:bg-blue-600 hover:text-white"
                        >
                          Khác
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3 mt-6">
              <Button className="bg-blue-700 text-white hover:bg-blue-800 hover:shadow-lg hover:text-white cursor-pointer text-sm md:text-base">
                Đăng Ký
              </Button>
            </div>
          </TabsContent>
          {/* End Register */}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
