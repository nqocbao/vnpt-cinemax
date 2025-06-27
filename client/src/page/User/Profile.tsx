import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Award, Camera, ChevronRight, Lock, Mail, Medal, Phone, User, User2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-2 px-2 md:px-4 lg:px-8 grid grid-cols-12 gap-8">
            <div className="bg-white col-span-4 lg:shadow-2xl rounded px-8 h-[600px] space-y-6">
                <div className="flex items-center justify-center gap-6 my-6">
                    <div className="p-6 bg-gray-200 rounded-[50%]">
                        <Camera />
                    </div>
                    <div className="">
                        <div className="flex items-center gap-2">
                            <Award className='w-4 h-4 text-orange-700'/>
                            <span className='font-semibold'>Trương Quân</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Medal className='w-4 h-4 text-orange-700'/>
                            <span>0 Starts</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#ccc]'></div>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-gray-600'>Tổng chi tiêu 2025</p>
                    <span className='text-[#8B008B] font-semibold'>0 đ</span>
                </div>
                <div className='border border-[#ccc]'></div>
                <div className='flex justify-between'>
                    <h3 className='font-semibold text-base'>HOTLINE hỗ trợ: <span className='text-blue-700'>19002224 (9:00 - 22:00)</span></h3>
                    <ChevronRight className='text-gray-500 w-5 h-5'/>
                </div>
                <div className='border border-[#ccc]'></div>
                <div className='flex justify-between'>
                    <h3 className='font-semibold text-base'>Email: <span className='text-blue-700'>hotro@cinemaxstudio.vn</span></h3>
                    <ChevronRight className='text-gray-500 w-5 h-5'/>

                </div>
                <div className='border border-[#ccc]'></div>
                <div className='flex justify-between'>
                    <h3 className='font-semibold text-base'>Câu hỏi thường gặp</h3>
                    <ChevronRight className='text-gray-500 w-5 h-5'/>

                </div>  
            </div>
            <div className="bg-white col-span-8 lg:shadow-2xl rounded px-8">
                <Tabs defaultValue="transaction" className="w-full">
                    <TabsList className='flex flex-nowrap flex-row justify-between w-full my-6'>
                        <TabsTrigger value="transaction" className='!shadow-none text-lg text-gray-500 data-[state=active]:border-[3px] data-[state=active]:border-b-[#8B008B] data-[state=active]:text-[#8B008B]'>Lịch Sử Giao Dịch</TabsTrigger>
                        <TabsTrigger value="profile" className='!shadow-none text-lg text-gray-500 data-[state=active]:border-[3px] data-[state=active]:border-b-[#8B008B] data-[state=active]:text-[#8B008B]'>Thông Tin Cá Nhân</TabsTrigger>
                        <TabsTrigger value="notify" className='!shadow-none text-lg text-gray-500 data-[state=active]:border-[3px] data-[state=active]:border-b-[#8B008B] data-[state=active]:text-[#8B008B]'>Thông Báo</TabsTrigger>
                        <TabsTrigger value="reward" className='!shadow-none text-lg text-gray-500 data-[state=active]:border-[3px] data-[state=active]:border-b-[#8B008B] data-[state=active]:text-[#8B008B]'>Quà Tặng</TabsTrigger>
                        <TabsTrigger value="policy" className='!shadow-none text-lg text-gray-500 data-[state=active]:border-[3px] data-[state=active]:border-b-[#8B008B] data-[state=active]:text-[#8B008B]'>Chính Sách</TabsTrigger>
                    </TabsList>
                    <TabsContent value="transaction">Make changes to your account here.</TabsContent>
                    <TabsContent value="profile">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-6">
                                <div>
                                <Label htmlFor="name" className="my-2">
                                    <span className="text-red-600">*</span> Họ tên
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                                    <Input
                                    disabled
                                    type="text"
                                    placeholder="Trương Quân"
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
                                    disabled
                                    type="email"
                                    placeholder="quantmph30701@fpt.edu.vn"
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
                                    disabled
                                    type="phone"
                                    placeholder="098112253"
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
                                    disabled
                                    type="password"
                                    placeholder="************"
                                    className="pl-10 focus-visible:shadow-none focus-visible:ring-0"
                                    />
                                </div>
                                </div>
                               

                                <div className="space-y-2 mb-8">
                                    <RadioGroup defaultValue="boy">
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
                                <Button className='bg-[#8B008B] text-white hover:bg-[#6A006A] cursor-pointer'>Cập Nhật</Button>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="notify">Change your password here.</TabsContent>
                    <TabsContent value="reward">Change your password here.</TabsContent>
                    <TabsContent value="policy">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </div>
        
      </div>    
      <Footer />
    </div>
  )
}

export default Profile
