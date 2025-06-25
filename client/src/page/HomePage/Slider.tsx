import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi // Giữ nguyên type CarouselApi nếu bạn đang dùng TypeScript
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Slider = () => {
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
    <div className='w-full relative space-y-4'> 
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
        className='w-full overflow-hidden'
      >
        <CarouselContent>
          <CarouselItem>
            <img src="/banner1.jpg" alt="" className='w-full h-full object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/banner2.jpg" alt="" className='w-full h-full object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/banner3.jpg" alt="" className='w-full h-full object-cover'/>
          </CarouselItem>
          <CarouselItem>
            <img src="/banner4.jpg" alt="" className='w-full h-full object-cover'/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute w-12 h-12 left-2 top-1/2 -translate-y-1/2 z-30 bg-white hidden md:flex" />
        <CarouselNext className="absolute w-12 h-12 right-2 top-1/2 -translate-y-1/2 z-30 bg-white hidden md:flex" />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api && api.scrollTo(index)} // Scroll to slide click on dot
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full border border-white transition-colors duration-200 ${
                current === index + 1 ? 'bg-white' : 'bg-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`} 
            />
          ))}
        </div>
      </Carousel>

    </div>
  )
}

export default Slider