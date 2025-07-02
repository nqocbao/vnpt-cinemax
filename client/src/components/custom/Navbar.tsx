import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Award,
  CircleUser,
  LogOut,
  Medal,
  Menu,
  Search,
  Star,
  User2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between py-2 px-2 md:px-4 xl:px-8 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="flex items-center h-8 sm:h-10 md:h-14 lg:h-20"
            />
            <Button className="bg-[#8B008B] text-white hover:bg-[#6A006A] px-1 py-0.5 h-6 md:h-8 lg:h-9 lg:px-4 lg:py-2">
              <Star className="w-4 h-4 mr-1 hidden sm:flex" />
              <Link
                to="/booking"
                className="sm:text-xs md:text-sm lg:text-base"
              >
                Mua Vé
              </Link>
            </Button>
          </div>
        </Link>
        {/* End Logo */}

        {/* Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu viewport={false} className="relative z-50">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Phim</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Phim Đang Chiếu
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Phim Sắp Chiếu
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sản Phẩm</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Concert G-Dragon
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Cinemax
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Góc Điện Ảnh</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Thể Loại Phim
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Diễn Viên
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Đạo Diễn
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Sự Kiện</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Ưu đãi
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Phim hay tháng
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Rạp/Giá Vé</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[200px] gap-4 max-h-48 overflow-y-auto">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Cinemax Rice City
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Cinemax Phạm Ngọc Thạch
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="#"
                          className="hover:bg-[#CC9999] text-black hover:text-white"
                        >
                          Cinemax Vimcom Bà Triệu
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="md:flex items-center hidden">
              <NavigationMenu viewport={false} className="relative z-50">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <CircleUser />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white">
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/"
                              className="flex !flex-row items-center gap-2 hover:bg-[#CC9999] text-black hover:text-white"
                            >
                              <User2 /> Tài Khoản
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            asChild
                            onClick={() => {
                              logout();
                              navigate("/auth");
                            }}
                          >
                            <Link
                              to="/auth"
                              className="flex !flex-row items-center gap-2 hover:bg-[#CC9999] text-black hover:text-white"
                            >
                              <LogOut /> Đăng Xuất
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <span className="font-semibold">{user.userId}</span>
            </div>
          ) : (
            <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white h-6 md:h-8 lg:h-9">
              <Link to="/auth" className="sm:text-xs md:text-sm lg:text-base">
                Đăng Nhập
              </Link>
            </Button>
          )}
          <Sheet>
            <SheetTrigger>
              <Menu className="flex lg:hidden" />
            </SheetTrigger>
            <SheetContent className="bg-white pl-3 w-2/3 md:1/3">
              <SheetHeader>
                {/* Input Mobile & Tablet */}
                <SheetTitle>
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      className="pl-10 h-6 text-xs md:h-8 w-32 sm:w-40 md:w-48 focus-visible:shadow-none focus-visible:ring-0 border-[#8B008B]"
                    />
                    <Search className="absolute left-3 h-4 md:h-5 w-4 md:w-5 text-[#8B008B] cursor-pointer" />
                  </div>
                </SheetTitle>
                {/* End Input Mobile & Tablet */}
                {/* Infor User Loggin */}
                {isLoggedIn && (
                  <div className="b">
                    <div className="flex justify-center py-4">
                      <Link to="#" className="flex items-center gap-2">
                        <div>
                          <CircleUser className="text-gray-500 hover:text-[#CC9999]" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <Medal className="text-orange-700 h-4 w-4" />
                            <span className="font-medium  hover:text-[#CC9999]">
                              {user.userId}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="text-orange-700 h-4 w-4" />
                            <span>0 Starts</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="flex items-center">
                                <Award className="text-yellow-400 h-4 w-4"/>
                                <span>0 Starts</span>
                            </div> */}
                  </div>
                )}
                {/* End Infor User Loggin */}

                {/* Menu Mobile & Tablet */}
                <SheetDescription>
                  <div className="block lg:hidden">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="movie" className="border-none">
                        <AccordionTrigger className="focus:text-[#8B008B]">
                          Phim
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Phim Đang Chiếu
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Phim Sắp Chiếu
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="product" className="border-none">
                        <AccordionTrigger className="focus:text-[#8B008B]">
                          Sản Phẩm
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Concert G-Dragon
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Cinemax
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="movie-corner"
                        className="border-none"
                      >
                        <AccordionTrigger className="focus:text-[#8B008B]">
                          Góc Điện Ảnh
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Thể Loại Phim
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Diễn Viên
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Đạo Diễn
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="event" className="border-none">
                        <AccordionTrigger className="focus:text-[#8B008B]">
                          Sự Kiện
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2">
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Ưu đãi
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Phim hay tháng
                          </Link>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="tent" className="border-none">
                        <AccordionTrigger className="focus:text-[#8B008B]">
                          Rạp/Giá Vé
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 space-y-2 max-h-48 overflow-y-auto">
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Cinemax Rice City
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Cinemax Phạm Ngọc Thạch
                          </Link>
                          <Link to="#" className="block hover:text-[#CC9999]">
                            Cinemax Vincom Bà Triệu
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </SheetDescription>
                {/* End Menu Mobile & Tablet*/}
              </SheetHeader>
              {/* Logout */}
              {isLoggedIn && (
                <div className="mt-auto flex justify-center pb-4">
                  <Link
                    to="/auth"
                    className="flex items-center gap-2 bg-[#CC9999] text-black hover:opacity-80 px-4 py-2 rounded"
                    onClick={() => {
                      logout();
                    }}
                  >
                    <LogOut className="text-gray-500" />
                    <span className="text-sm font-medium">Đăng Xuất</span>
                  </Link>
                </div>
              )}
              {/* End Logout */}
            </SheetContent>
          </Sheet>
        </div>
        {/* End Login/Profile */}
      </nav>
      {/* End Navbar */}
    </div>
  );
};

export default Navbar;
