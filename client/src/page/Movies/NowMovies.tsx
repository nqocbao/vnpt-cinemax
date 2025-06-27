import { Button } from '@/components/ui/button'
import { Star, Video } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MovieTabs from './MovieTabs'

const movies = [
    {id: 1, name: 'Bí Kíp Luyện Rồng', age: 'C18', image: 'https://cdn.galaxycine.vn/media/2025/2/17/bi-kip-luyen-rong-500_1739776695143.jpg'},
    {id: 2, name: 'ÚT Lan: Oán Linh Giữ Của', age: 'C18', image: 'https://cdn.galaxycine.vn/media/2025/6/16/ut-lan-500_1750048341370.jpg'},
    {id: 3, name: '28 Năm Sau Tận Thế', age: 'C18', image: 'https://cdn.galaxycine.vn/media/2025/6/20/28-year-later-500_1750407074215.jpg'},
    {id: 4, name: 'Halabala: Rừng Ma Tế Xác', age: 'C18', image: 'https://cdn.galaxycine.vn/media/2025/6/10/halaba-500_1749539454772.jpg'},
    {id: 5, name: 'M3GAN 2.0', age: 'C16', image: 'https://cdn.galaxycine.vn/media/2025/4/11/megan-500_1744365069100.jpg'},
    {id: 6, name: 'Mượn Rượu Đẩy Kèo', age: 'C18', image: 'https://cdn.galaxycine.vn/media/2025/6/25/muon-ruou-day-keo-500_1750822575984.jpg'},
    {id: 7, name: 'F1', age: 'C16', image: 'https://cdn.galaxycine.vn/media/2025/4/28/f1-500_1745833699523.jpg'},
    {id: 8, name: 'Bộ 5 Siêu Đẳng Cấp', age: 'C16', image: 'https://cdn.galaxycine.vn/media/2025/5/27/hi5-500_1748319635634.jpg'},
    {id: 8, name: 'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu', age: 'K', image: 'https://cdn.galaxycine.vn/media/2025/5/23/doraemon-movie-44-2_1748017492103.jpg'},
]
const NowMovies = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto my-8 md:my-14">
        <div className='my-8 md:my-14 '>
            <div className="lg:ml-3 px-4 md:px-8 ">
                <MovieTabs />
                  {/* Phim Đang Chiếu */}
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
                  {movies.map((movie) => (
                      <div className="space-y-2 group relative" key={movie.id}>
                        <div className="absolute top-2 left-2 bg-red-700 text-white p-1 md:p-2 rounded-md">
                            {movie.age}
                        </div>
                        <img src={movie.image} alt="" className='rounded-2xl group-hover:blur-xs duration-300 '/>
                         <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
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
                        <p className='font-bold truncate text-sm md:text-base md:block text-gray-600 hover:text-blue-600 cursor-pointer'>{movie.name}</p>
                    </div>
                  ))}
                 
                </div>
                {/* End */}
           
            </div>

            <div className="lg:ml-3 px-4 md:px-8 my-20">
                <div className=''>
                  <h1 className='text-2xl  border-l-[4px] border-l-[#8B008B] pl-3 text-xl'>PHIM ĐANG CHIẾU</h1>
                </div>
                <div className='space-y-4 text-sm mt-12'>
                  <p>Một mùa hè mới lại đến, khối nghỉ hè bắt đầu xâm chiếm mọi ngóc ngách. Để các khối còn lại 
                    có thể bình tâm thư giãn, đôi khi là “thao túng” được khối nghỉ hè, hãy đến với <strong>Cinemax</strong>, 
                    nơi có vô vàn những bộ phim cực kì thú vị dành cho mọi người, mọi nhà.
                  </p>
                  <p>Các em nhỏ sẽ được phiêu lưu cùng cậu bé Elio ra ngoài vũ trụ, hoặc là chiêm ngưỡng nhưng chú rồng 
                    thực thụ trong bản live action của <strong>Bí Kíp Luyện Rồng</strong>. Ngoài ra, các vị phụ huynh cũng được chiêu đã 
                    phần ngoại truyện của John Wick, và phần tiếp theo của series 28. Cùng tìm hiểu nha.
                  </p>
                  <p>
                    <span><a href="#" className='font-semibold text-blue-700'>1.Từ Vũ Trụ John Wick: Ballerina – Hành động – 06.06</a></span>
                  </p>
                  <p>Sau nhiều sự chờ đợi, phần ngoại truyện của loạt phim hành động vô cùng được yêu thích - <strong>Từ Vũ Trụ John Wick: 
                    Ballerina</strong> vừa 'chốt đơn' ra rạp tại Việt Nam trong tháng 6 năm nay. Được biết, <strong>Từ Vũ Trụ John Wick: Ballerina </strong>
                    sẽ diễn ra giữa các sự kiện sau phần ba và trước phần 4 của John Wick, xoay quanh nhân vật chính là nữ sát thủ 
                    Eve Maccaro. Tác phẩm có sự tham gia của các diễn viên Ana de Armas, Anjelica Huston, Norman Reedus và đặc biệt0 
                    là sự trở lại của tài tử Keanu Reeves trong vai John Wick.
                  </p>
                  <p>
                    Lấy bối cảnh giữa sự kiện của Sát thủ <i className='text-blue-500'>John Wick: Phần 3 – Chuẩn Bị Chiến Tranh</i>, bộ phim <strong>Từ Vũ Trụ John Wick: Ballerina</strong> 
                    theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình trả thù cho cái chết của gia đình mình, dưới sự huấn 
                    luyện của tổ chức tội phạm Ruska Roma.
                  </p>
                  <p>
                    <span><a href="#" className='font-semibold text-blue-700'>2.Materialists/ Một Nửa Hoàn Hảo – Hài, Lãng mạn – 27.06</a></span>

                  </p>
                  <p>Với sự góp mặt của Dakota Johnson, Chris Evans và Pedro Pascal, bộ phim <strong className='text-blue-700'>Materialists</strong> (tựa việt: <strong className='text-blue-700'>Một Nửa Hoàn Hảo</strong>) đánh 
                    dấu màn tái xuất đầy hứa hẹn của nhà làm phim gốc Hàn sau cú hích đầu tay vang danh toàn cầu. Đứa con tinh mới nhất của 
                    Celine Song - đạo diễn đứng sau tuyệt tác Past Lives (2023) - tiếp tục hành trình đi tìm lời đáp cho bản chất của tình yêu.
                  </p>
                  <p>
                    <strong className='text-blue-700'>Materialists</strong> xoay quanh Lucy (Dakota Johnson), một chuyên gia mai mối tình yêu tại New York, giúp đỡ khách hàng có thể tìm 
                    thấy “mảnh ghép hoàn hảo” của cuộc đời mình. Dịch vụ của Lucy được nhiều người săn đón, trong khi cô phải tiếp xúc với hàng 
                    loạt yêu cầu tìm bạn đời kỳ quặc mỗi ngày.
                  </p>
                  <p>
                    <span><a href="#" className='font-semibold text-blue-700'>3.Út Lan: Oán Linh Giữ Của – Kinh dị - 20.06</a></span>
                  </p>
                  <p>
                    <a href='#' className='text-blue-700 font-semibold'>Út Lan: Oán Linh Giữ Của</a> đã thu hút sự chú ý mạnh mẽ với câu chuyện về “thần giữ của” trong văn hóa tâm linh Việt. Đây là thực thể 
                    được xem như thần hoặc linh hồn với nhiệm vụ trông coi tài sản, kho báu. Từ đó, <i className='text-blue-500'>phim chiếu rạp</i> khai thác sâu vào những nghi thức 
                    hiến tế đầy ám ảnh, lên án hủ tục lạc hậu và đề cao khát khao hạnh phúc từ chính nỗ lực của bản thân. <a href='#' className='text-blue-700 font-semibold'>Út Lan: Oán Linh Giữ Của</a> được 
                    đạo diễn bởi Trần Trọng Dần và có sự tham gia của Quốc Trường, Mạc Văn Khoa,…
                  </p>
                  <p><a href='#' className='text-blue-700 font-semibold'>Út Lan: Oán Linh Giữ Của</a> diễn ra sau sự ra đi của cha, Lan (Phương Thanh) về một vùng quê và ở đợ cho nhà ông Danh (Mạc Văn Khoa) - một 
                    người đàn ông góa vợ, không con cái. Ngay sau khi bước chân vào căn nhà, Lan phải đối mặt với hàng loạt hiện tượng kỳ dị và những cái 
                    chết bí ẩn liên tục xảy ra. Cùng với Sơn (Quốc Trường) - một nhà văn chuyên viết truyện kinh dị, Lan bắt đầu lật mở những bí mật kinh 
                    hoàng, khám phá lịch sử đen tối của căn nhà.
                  </p>
                </div>              
            </div>
        </div>
       
      </div>
      <Footer />
    </div>
  )
}

export default NowMovies
