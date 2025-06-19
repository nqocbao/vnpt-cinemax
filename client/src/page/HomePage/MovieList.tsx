import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { Star, Video } from 'lucide-react'
const MovieList = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex my-6">
            <div className="ml-3">
                <Tabs defaultValue="nowPlaying" className='w-full space-y-6'> 
                <TabsList className='gap-x-8'>
                    <h1 className='text-2xl font-font-semibold border-l-[4px] border-l-blue-700 pl-3'>PHIM</h1>
                    <TabsTrigger
                        value="nowPlaying"
                        className='text-gray-500 data-[state=active]:text-blue-800 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-800 hover:text-blue-600 px-4 py-2 rounded-none text-base !shadow-none cursor-pointer'
                    >
                        Đang Chiếu
                    </TabsTrigger>
                    <TabsTrigger
                        value="comingSoon"
                        className='text-gray-500 data-[state=active]:text-blue-800 data-[state=active]:border-b-2 data-[state=active]:border-b-blue-800 hover:text-blue-600 px-4 py-2 rounded-none text-base !shadow-none cursor-pointer'
                    >
                        Sắp Chiếu
                    </TabsTrigger>
                </TabsList>
                {/* Phim Đang Chiếu */}
                <TabsContent value="nowPlaying" className='grid grid-cols-4 gap-6'>
                    <div className="space-y-2 group relative">
                        <img src="/movie2.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie2.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie2.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie2.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                </TabsContent>
                {/* End */}
                
                {/* Phim Sắp Chiếu */}
                <TabsContent value="comingSoon" className='grid grid-cols-4 gap-6'>
                    <div className="space-y-2 group relative">
                        <img src="/movie1.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie1.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie1.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie1.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0  rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>

                    <div className="space-y-2 group relative">
                        <img src="/movie1.jpg" alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 ">
                            <Button
                                className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer"
                            >
                                <Star className="w-4 h-4 mr-1 hidden sm:flex"/>
                                Mua vé
                            </Button>
                            <Button 
                                className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent"
                            >
                                <Video />
                                Trailer
                            </Button>
                        </div>
                        <p className='font-bold'>Bí Kíp Luyện Rồng</p>
                    </div>
                </TabsContent>
                {/* End */}
                </Tabs>
            </div>
        </div>
       <div className="flex flex-col items-center">
            <Button 
                className='border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer'
            >
                Xem Thêm
            </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieList
