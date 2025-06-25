import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cake, CakeSlice, Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { useState } from 'react'

const MovieInfo = () => {
const [api, setApi] = useState<CarouselApi | null>(null)

  const scrollLeft = () => {
    api?.scrollPrev()
  }

  const scrollRight = () => {
    api?.scrollNext()
  }
  return (
    <div className='max-w-screen-xl mx-auto py-2 px-2 md:px-4 xl:px-8'>
        <div className="flex justify-between gap-8">
            {/* Thông Tin */}
            <div className="w-full lg:w-2/3 space-y-12">
                {/* Thông Tin Phim */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="w-2/3 mx-auto md:mx-0 md:w-1/3">
                        <img 
                        src="https://cdn.galaxycine.vn/media/2025/6/24/ma-khong-dau-1_1750721724248.jpg" alt="" 
                        className='w-full object-cover h-auto rounded'
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-black-10 mr-4'>Ma Không Đầu</h1>
                            <span className='bg-red-700 text-white p-1 md:p-2 rounded-md'>C18</span>
                        </div>
                        <div className="flex flex-wrap space-x-6">
                            <div className="flex items-center space-x-1 text-sm">
                                <Clock className='text-yellow-500'/>
                                <span className='text-gray-700'>115 Phút</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm">
                                <Calendar className='text-yellow-500'/>
                                <span className='text-gray-700'>27/06/2025</span>
                            </div>
                        </div>
                        <div className="text-sm flex gap-1">
                            <span className='text-gray-500'>Quốc gia: </span>
                            <span className='text-gray-700'>Việt Nam</span>
                        </div>
                        <div className="text-sm flex gap-1">
                            <span className='text-gray-500'>Nhà sản xuất: </span>
                            <span className='text-gray-700'>Tiến Luật, Cinemax Studio</span>
                        </div>

                        <div className="text-sm flex gap-1 ">
                            <span className='text-gray-500'>Thể loại: </span>
                                <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                                    <li className='inline-block'><a href="#" className='text-gray-800 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>Kinh Dị</a></li>
                                    <li className='inline-block'><a href="#" className='text-gray-800 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>Hài</a></li>
                                </ul>
                        </div>

                        <div className="text-sm flex gap-1 ">
                            <span className='text-gray-500'>Đạo diễn: </span>
                                <ul className="ml-2 flex flex-wrap gap-1 flex-1">
                                    <li className='inline-block'><a href="#" className='text-gray-800 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>Bùi Văn Hải</a></li>
                                </ul>
                        </div>

                        <div className="text-sm flex gap-1">
                            <span className='text-gray-500'>Diễn viên:</span>
                                <ul className='ml-2 flex flex-wrap gap-1 flex-1'>
                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>Ngô Kiến Huy</a></li>
                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>Tiến Luật</a></li>
                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>NSND Hồng Vân</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
                {/* End */}

                {/* Nội Dung Phim */}
                <div>
                    <div className="mb-4">
                        <span className='border-l-4 border-solid border-l-[#8B008B] mr-2'></span>
                        <h1 className="text-base inline-block font-semibold">NỘI DUNG PHIM</h1>    
                    </div>
                    <div className="">
                        <p className='text-gray-700'>Bộ đôi Tiến Luật và Ngô Kiến Huy, với nghề nghiệp "độc lạ" hốt xác và lái xe cứu thương, 
                            hứa hẹn mang đến những tràng cười không ngớt cho khán giả qua hành trình tìm xác có một 
                            không hai trên màn ảnh Việt. Nhờ sự trợ giúp của thế lực tâm linh, họ không chỉ đối mặt 
                            với những tình huống "dở khóc dở cười" mà còn khám phá ra những bí mật rợn người ẩn sau 
                            những thi thể. Liệu họ có hoàn thành nhiệm vụ "khó nhằn" này hay sẽ gặp phải những "biến cố" nào?
                        </p>
                    </div>
                </div>
                {/* End */}

                {/* Lịch chiếu */}
                <div>
                    <div className="mb-8">
                        <span className='border-l-4 border-solid border-l-[#8B008B] mr-2'></span>
                        <h1 className="text-base inline-block font-semibold">LICH CHIẾU</h1>    
                    </div>
                    <div>
                        <Tabs defaultValue="monday" className="space-y-8 relative">
                            <Carousel setApi={setApi}>
                            <TabsList className="flex w-full px-2">
                                <CarouselContent>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="monday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                        <p>Thứ Hai</p>
                                        <span>23/06</span>
                                    </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="tuesday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Thứ Ba</p>
                                            <span>24/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="wednesday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Thứ Tư</p>
                                            <span>25/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="thurday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Thứ Năm</p>
                                            <span>26/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="friday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Thứ Sáu</p>
                                            <span>27/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="saturday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Thứ Bảy</p>
                                            <span>28/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                    <CarouselItem className='basis-1/3 md:basis-1/4 lg:basis-1/5'>
                                        <TabsTrigger value="sunday" className='text-gray-500 data-[state=active]:bg-[#8B008B] w-[70px] h-[50x] md:w-[90px] md:h-[65px] data-[state=active]:text-white text-sm md:text-base !shadow-none cursor-pointer flex flex-wrap'>
                                            <p>Chủ Nhật</p>
                                            <span>29/06</span>
                                        </TabsTrigger>
                                    </CarouselItem>
                                </CarouselContent>
                            </TabsList>
                             <ChevronLeft onClick={scrollLeft} className="absolute w-6 md:bg-transparenth-6 left-0 top-1/2 -translate-y-1/2 z-30 flex" />
                            <ChevronRight onClick={scrollRight} className="absolute w-6 md:bg-transparenth-6 right-0 top-1/2 -translate-y-1/2 z-30 flex" />
                            </Carousel>
                            <div className='border-b-[3px] border-b-[#8B008B]'></div>
                            <TabsContent value="monday" className='space-y-8'>
                                <div>
                                    <h1 className='text-base font-semibold mb-4'>Cinemax Rice City</h1>
                                    <div className='space-y-2'>
                                            <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>2D Phụ Đề:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>16:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>22:45</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>23:45</a></li>
                                                </ul>
                                            </div>
                                             <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>3D:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>10:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>13:45</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-base font-semibold mb-4'>Cinemax Phạm Ngọc Thạch</h1>
                                    <div className='space-y-2'>
                                            <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>2D Phụ Đề:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>16:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>22:45</a></li>
                                                </ul>
                                            </div>
                                             <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>3D:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>10:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:border-[#8B008B] rounded-lg px-4 py-2'>13:45</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="tuesday" className='space-y-8'>
                                 <div>
                                    <h1 className='text-base font-semibold mb-4'>Cinemax Rice City</h1>
                                    <div className='space-y-2'>
                                            <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>2D Phụ Đề:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>10:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>11:45</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>20:45</a></li>
                                                </ul>
                                            </div>
                                             <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>3D:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>13:45</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-base font-semibold mb-4'>Cinemax Phạm Ngọc Thạch</h1>
                                    <div className='space-y-2'>
                                            <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>2D Phụ Đề:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>10:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>11:45</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>20:45</a></li>
                                                </ul>
                                            </div>
                                             <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>3D:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>13:45</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-base font-semibold mb-4'>Cinemax Bà Triệu</h1>
                                    <div className='space-y-2'>
                                            <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>2D Phụ Đề:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>10:30</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>11:45</a></li>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>20:45</a></li>
                                                </ul>
                                            </div>
                                             <div className="flex md:flex-row flex-col gap-2 md:items-center">
                                                <span className='text-gray-500'>3D:</span>
                                                <ul className='md:ml-2 flex flex-wrap gap-1 flex-1'>
                                                    <li className='inline-block'><a href="#" className='text-gray-700 inline-flex border border-gray-300 hover:bg-[#8B008B] hover:text-white rounded-lg px-4 py-2'>13:45</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                   
                </div>
                {/* End */}
            </div>
            {/* End */}
            
            {/* Phim Đang Chiếu*/}
            <div className="space-y-4 hidden lg:block lg:w-1/3">
                <div className="">
                    <span className='border-l-4 border-solid border-l-[#8B008B] mr-2'></span>
                    <h1 className="text-xl inline-block font-semibold">PHIM ĐANG CHIẾU</h1>    
                </div>
                <div className="space-y-2">
                    <a href=""><img src="https://cdn.galaxycine.vn/media/2025/6/24/ma-khong-dau-1_1750721724248.jpg" alt="" className='w-full max-h-[230px] rounded-lg hover:opacity-80'/></a>
                    <p className='font-semibold'><a href="">Ma Không Đầu</a></p>
                </div>
                <div className="space-y-2">
                    <a href=""><img src="https://cdn.galaxycine.vn/media/2025/6/18/elio-750_1750220019303.jpg" alt="" className='w-full max-h-[230px] rounded-lg hover:opacity-80'/></a>
                    <p className='font-semibold'><a href="">Elio Cậu Bé Đến Từ Trái Đất</a></p>
                </div>
                <div className="space-y-2">
                    <a href=""><img src="https://cdn.galaxycine.vn/media/2025/6/20/28-year-later-500_1750407074215.jpg" alt="" className='w-full max-h-[230px] rounded-lg hover:opacity-80'/></a>
                    <p className='font-semibold'><a href="">28 Năm Sau Tận Thế</a></p>
                </div>
                <div className="flex flex-col items-center">
                    <Button 
                        className='border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer'
                    >
                        Xem Thêm
                    </Button>
                </div>
            </div>
            {/* End */}
        </div>
    </div>
  )
}

export default MovieInfo
