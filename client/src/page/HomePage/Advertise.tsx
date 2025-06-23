import React from 'react'

const Advertise = () => {
  return (
    <div className='mx-auto bg-blue-900 my-8 md:my-14 hidden md:flex'>
       <div className="grid grid-cols-2 gap-6 py-12 px-4 md:px-8 lg:px-12">
         <div className='mx-auto'>
            <img src="https://www.galaxycine.vn/_next/static/media/Frame-iphone-x.78ef1223.svg" alt=""/>
        </div>
        <div className='flex items-center md:px-0 lg:px-12'>
            <div>
                <h1 className='text-3xl text-white mb-4'>Đặt Vé Online - Không Lo Trễ Nải</h1>
                <p className='text-sm text-white mb-5'>Ghét đông đúc ồn ào? Lười xếp hàng mua vé?
                    Hãy quên đi cách mua vé giấy truyền thống tốn
                    thời gian hay xếp hàng lấy vé online phiền toái.
                </p>
                <div className='flex items-end space-x-4'>
                    <span><img src="https://www.galaxycine.vn/_next/static/media/glx-qr-code-1.218ae7da.svg" alt="" /></span>
                    <span className='text-white'>OR</span>
                    <ul className='block lg:flex'>
                        <li><a href="#"><img src="https://www.galaxycine.vn/_next/static/media/icon-ios-app-store.65ed00df.svg" alt="" /></a></li>
                        <li className='ml-1 mt-1 lg:mt-0'><a href="#"><img src="https://www.galaxycine.vn/_next/static/media/icon-google-app-store.f4c38402.svg" alt="" /></a></li>
                    </ul>
                 
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Advertise
