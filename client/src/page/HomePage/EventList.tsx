import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

const EventList = () => {
    const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className="my-8 md:my-14">
        <h1 className='text-2xl font-semibold border-l-[4px] border-l-[#8B008B] pl-3 hidden md:flex'>TIN KHUYẾN MÃI</h1>
      </div>
      <div className="px-4">
        <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{ 
                loop: true,
                align: "start",
            }}
            className='w-full overflow-hidden'
        >
            <CarouselContent>
                <CarouselItem className='basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 space-y-2'>
                    <img src="/event1.jpg" alt="" className='w-full object-cover'/>
                    <p className='text-base text-gray-700 font-semibold line-clamp-2'>Vui Mua Sắm - Cinemax Mời Bắp Ngọt</p>
                </CarouselItem>
                <CarouselItem className='basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 space-y-2'>
                    <img src="/event2.jpg" alt="" className='w-full object-cover'/>
                    <p className='text-base text-gray-700 font-semibold line-clamp-2'>Vui Mua Sắm - Cinemax Mời Bắp Ngọt</p>
                </CarouselItem>
                <CarouselItem className='basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 space-y-2'>
                    <img src="/event3.jpg" alt="" className='w-full object-cover'/>
                    <p className='text-base text-gray-700 font-semibold line-clamp-2'>Vui Mua Sắm - Cinemax Mời Bắp Ngọt</p>
                </CarouselItem>
                <CarouselItem className='basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 space-y-2'>
                    <img src="/event4.jpg" alt="" className='w-full object-cover'/>
                    <p className='text-base text-gray-700 font-semibold line-clamp-2'>Vui Mua Sắm - Cinemax Mời Bắp Ngọt</p>
                </CarouselItem>
                <CarouselItem className='basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 space-y-2'>
                    <img src="/event5.jpg" alt="" className='w-full object-cover'/>
                    <p className='text-base text-gray-700 font-semibold line-clamp-2'>Vui Mua Sắm - Cinemax Mời Bắp Ngọt Tuyệt</p>
                </CarouselItem>
            </CarouselContent>

        </Carousel>

      </div>
    </div>
  )
}

export default EventList
