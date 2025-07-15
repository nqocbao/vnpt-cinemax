import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useAuth } from "@/context/AuthContext";
import MainLayout from "@/layouts/MainLayout";
import AuthDialog from "@/components/custom/AuthDialog";

export default function Auth() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Dialog states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"success" | "error">("success");
  const [dialogAction, setDialogAction] = useState<"login" | "register">(
    "login"
  );
  const [dialogMessage, setDialogMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok || data.status === 200) {
        // Lưu token và userId vào localStorage và context
        if (data.token && data.userId && data.role) {
          login(data.userId.toString(), data.token, data.role);
          localStorage.setItem("role", data.role);
        }
        setDialogType("success");
        setDialogAction("login");
        setDialogMessage(data.message || "Đăng nhập thành công");
        setDialogOpen(true);
      } else {
        setDialogType("error");
        setDialogAction("login");
        setDialogMessage(data.error || data.message || "Đăng nhập thất bại");
        setDialogOpen(true);
      }
    } catch (err) {
      setDialogType("error");
      setDialogAction("login");
      setDialogMessage("Lỗi kết nối server: " + err);
      setDialogOpen(true);
    } finally {
      setLoading(false);
    }
  };

  // State cho đăng ký
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerGender, setRegisterGender] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterLoading(true);
    try {
      const payload = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        phone: registerPhone,
        role: "customer",
        gender: registerGender,
      };
      console.log("Register payload:", payload);
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Register response:", data);
      if (res.ok && data.userId) {
        // Lưu token và userId vào localStorage và context
        if (data.token && data.userId) {
          setTimeout(() => {
            login(data.userId.toString(), data.token, "customer");
          }, 4000);
        }
        setRegisterName("");
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterPhone("");
        setRegisterGender("");
        setDialogType("success");
        setDialogAction("register");
        setDialogMessage("Đăng ký thành công");
        setDialogOpen(true);
      } else {
        setDialogType("error");
        setDialogAction("register");
        setDialogMessage(data.error || data.message || "Đăng ký thất bại");
        setDialogOpen(true);
      }
    } catch {
      setDialogType("error");
      setDialogAction("register");
      setDialogMessage("Lỗi kết nối server");
      setDialogOpen(true);
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleRedirect = () => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-screen items-center justify-center mb-6 md:-mt-10 mx-5 md:mx-0">
        <Tabs
          defaultValue="login"
          className="w-full max-w-[560px] min-h-[400px] mx-auto px-2"
        >
          {/* Navigate */}
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-[#CC9999] data-[state=active]:text-white p-2 border border-b-[#ccc] rounded-none cursor-pointer text-sm md:text-base"
            >
              ĐĂNG NHẬP
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="data-[state=active]:bg-[#CC9999] data-[state=active]:text-white p-2 border border-b-[#ccc] rounded-none cursor-pointer text-sm md:text-base"
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
            <form onSubmit={handleLogin} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 mt-6">
                <Button
                  className="bg-[#CC9999] text-white hover:bg-[#c77c7c] hover:shadow-lg hover:text-white cursor-pointer text-sm md:text-base"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
                </Button>
              </div>
            </form>
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
            <form
              onSubmit={handleRegister}
              className="block gap-4 md:grid md:grid-cols-2"
            >
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
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
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
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
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
                      value={registerPhone}
                      onChange={(e) => setRegisterPhone(e.target.value)}
                      required
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
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
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
                      // Không cần state riêng, chỉ kiểm tra khi submit
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <Label htmlFor="sex" className="my-2">
                    <span className="text-red-600">*</span> Giới tính
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Select
                      value={registerGender}
                      onValueChange={setRegisterGender}
                      required
                    >
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Giới tính" />
                      </SelectTrigger>
                      <SelectContent className="z-50 max-h-[100px] overflow-y-auto bg-white shadow-md">
                        <SelectItem
                          value="male"
                          className="hover:bg-blue-600 hover:text-white"
                        >
                          Nam
                        </SelectItem>
                        <SelectItem
                          value="female"
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
              <div className="flex flex-col items-center space-y-3 mt-6 col-span-2">
                <Button
                  className="bg-[#CC9999] text-white hover:bg-[#c77c7c] hover:shadow-lg hover:text-white cursor-pointer text-sm md:text-base"
                  type="submit"
                  disabled={registerLoading}
                >
                  {registerLoading ? "Đang đăng ký..." : "Đăng Ký"}
                </Button>
              </div>
            </form>
          </TabsContent>
          {/* End Register */}
        </Tabs>
      </div>

      {/* Auth Dialog */}
      <AuthDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        type={dialogType}
        action={dialogAction}
        message={dialogMessage}
        onRedirect={handleRedirect}
      />
    </MainLayout>
  );
}
