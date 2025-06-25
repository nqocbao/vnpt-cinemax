import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog"; 
import { PlayCircle } from "lucide-react";

const Trailer = () => {
 const thumbnailUrl = 'https://cdn.galaxycine.vn/media/2025/6/6/bi-kip-luyen-rong-2048_1749195168873.jpg';
  const youtubeVideoId = '6tiAgkCFM-0?si=9fvu5vnSHk9RMjT9" title="YouTube video player" frameborder="0" allow="accelerometer;';

  return (
    <div className='w-full my-4 md:h-[70vh] bg-black flex flex-col justify-center items-center'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='relative w-full lg:max-w-4xl h-full'>
            <img
              src={thumbnailUrl}
              alt=""
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="text-white w-16 h-16 hover:opacity-60 cursor-pointer"/>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="w-full max-w-full sm:max-w-lg md:max-w-6xl lg:max-w-8xl overflow-hidden bg-transparent border-none px-4">
          <div className='mx-auto relative pt-[56.25%] w-full'> {/* 16:9 Aspect Ratio (9/16 * 100 = 56.25) */}
            <iframe
              className='absolute top-0 left-0 w-full h-full rounded-lg'
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Trailer;
