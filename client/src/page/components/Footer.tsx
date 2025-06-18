import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-700'>
      <div className='max-w-screen-xl mx-auto py-10'>
        <div className="grid grid-cols-4 gap-4">
            <div>
                <h1 className='text-white font-bold mb-4'>GIỚI THIỆU</h1>
                <ul className="space-y-4">
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Về Chúng Tôi</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Thoả Thuận Sử Dụng</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Quy Chế Hoạt Động</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Chính Sách Bảo Mật</li>
            </ul>
            </div>
            <div>
                <h1 className='text-white font-bold mb-4'>GÓC ĐIỆN ẢNH</h1>
                <ul className='space-y-4'>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Thể Loại Phim</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Bình Luận Phim</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Blog Điện Ảnh</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Phim Hay Tháng</li>
                    <li className='text-gray-300 hover:hover:font-bold  cursor-pointer'>Phim IMAX</li>
                </ul>
            </div>
            <div>
                <h1 className='text-white font-bold mb-4'>HỖ TRỢ</h1>
                <ul className="space-y-4">
                    <li className='text-gray-300 hover:font-bold cursor-pointer'>Góp Ý</li>
                    <li className='text-gray-300 hover:font-bold cursor-pointer'>Sale & Services</li>
                    <li className='text-gray-300 hover:font-bold cursor-pointer'>Rạp / Giá Vé</li>
                    <li className='text-gray-300 hover:font-bold cursor-pointer'>Tuyển Dụng</li>
                    <li className='text-gray-300 hover:font-bold cursor-pointer'>FAQ</li>
                </ul>
            </div>
            <div>
                <img src="/logo.png" alt="" className='h-16'/>
                <div className="flex items-center space-x-5 text-3xl text-white my-6">
                    <FontAwesomeIcon icon={faFacebook} className='hover:text-blue-600 hover:scale-110 transition duration-300 cursor-pointer'/>
                    <FontAwesomeIcon icon={faYoutube} className='hover:text-red-600 hover:scale-110 transition duration-300 cursor-pointer'/>
                    <FontAwesomeIcon icon={faInstagram} className='hover:text-orange-600 hover:scale-110 transition duration-300 cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className="border border-[#ccc] my-4"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-8">
                <div>
                    <img src="/logo.png" alt="Galaxy Cinema" className="h-12 md:h-16 object-contain" />
                </div>

                <div>
                    <h1 className="text-white font-semibold">
                    CÔNG TY CỔ PHẦN PHIM CINEMAX
                    </h1>
                    <p className="text-gray-300">
                    124 Hoàng Quốc Việt, Quận Cầu Giấy, Tp. Hà Nội
                    </p>
                    <p className="text-gray-300">
                    📞 028.39.333.303 – 📱 19002224 (9:00 - 22:00) – 📧 hotro@cinemaxstudio.vn
                    </p>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
