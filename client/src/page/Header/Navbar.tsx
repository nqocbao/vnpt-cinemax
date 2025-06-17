import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-4  max-w-screen-xl mx-auto">
            {/* Logo */}
            <div>
                <img src="/logo.png" alt="Logo" className="flex items-center h-24"/>
            </div>
            {/* End Logo */}

            {/* Menu */}
            <div className="flex items-center space-x-4">
                <Button className="bg-[#8B008B] text-white hover:bg-[#6A006A]">
                    <Star/>
                    <Link to='#'>Mua Vé</Link>
                </Button>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Phim</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[200px] gap-4">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Phim Đang Chiếu</Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Phim Sắp Chiếu</Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sản Phẩm</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Concert G-Dragon</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Cinemax</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Góc Điện Ảnh</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Thể Loại Phim</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Diễn Viên</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Đạo Diễn</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Sự Kiện</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Ưu đãi</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Phim hay tháng</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Rạp/Giá Vé</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4 max-h-50 overflow-y-auto">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Cinemax Rice City</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Cinemax Phạm Ngọc Thạch</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to='#' className="hover:bg-[#CC9999] hover:text-white">Cinemax Vimcom Bà Triệu</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {/* End Menu */}

            {/* Login */}
            <div className="flex items-center space-x-4">
                {/* <div className="relative flex items-center">
                    <Input type="text" className="pl-10 h-9 w-48 focus-visible:shadow-none focus-visible:ring-0"/>
                    <Search className="absolute left-3 h-5 w-5 text-[#8B008B] cursor-pointer"/>
                </div> */}
                <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#F0F0F0] hover:bg-[#8B008B] hover:text-white">
                    <Link to='#'>Đăng Nhập</Link>
                </Button>
            </div>
            {/* End Login */}
        </nav>
        {/* End Navbar */}
    </div>
  )
}

export default Navbar
