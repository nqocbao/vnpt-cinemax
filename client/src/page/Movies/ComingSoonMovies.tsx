import { Button } from "@/components/ui/button";
import { Star, Video } from "lucide-react";
import MovieTabs from "./MovieTabs";
import MainLayout from "@/layouts/MainLayout";

const movies = [
  {
    id: 1,
    name: "Cuộc Sống Màu Hồng",
    age: "C13",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/24/la-vie-en-rose-2007-2_1750736352448.jpg",
  },
  {
    id: 2,
    name: "Điều Uớc Cuối Cùng",
    age: "C16",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/19/dieu-uoc-cuoi-cung-500_1750327555016.jpg",
  },
  {
    id: 3,
    name: "Một Nửa Hoàn Hảo",
    age: "K",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/20/mot-nua-hoan-hao-500_1750391504780.jpg",
  },
  {
    id: 4,
    name: "Quan Tài Vợ Qủy",
    age: "C18",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/19/quan-tai-vo-qu-500_1750327081229.jpg",
  },
  {
    id: 5,
    name: "Ma Xưởng Mía",
    age: "C16",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/26/ma-xuong-mia-500_1750921008623.jpg",
  },
  {
    id: 6,
    name: "Thế Giới Khủng Long: Tái Sinh",
    age: "C13",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/4/jurassic-park-500_1749020869797.jpg",
  },
  {
    id: 7,
    name: "Superman",
    age: "C13",
    image:
      "https://cdn.galaxycine.vn/media/2024/12/26/superman-500_1735183326394.jpg",
  },
  {
    id: 8,
    name: "Đàn Cá Gỗ",
    age: "C16",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/24/dan-ca-go-500_1750735798718.jpg",
  },
  {
    id: 8,
    name: "Mang Mẹ Đi Bỏ",
    age: "C13",
    image:
      "https://cdn.galaxycine.vn/media/2025/6/13/mang-me-di-bo-500_1749801338920.jpg",
  },
];
const ComingSoonMovies = () => {
  return (
    <MainLayout>
      <div className="max-w-screen-xl mx-auto my-8 md:my-14">
        <div className="my-8 md:my-14">
          <div className="lg:ml-3 px-4 md:px-8">
            <MovieTabs />
            {/* Phim Sắp Chiếu */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {movies.map((movie) => (
                <div className="space-y-2 group relative" key={movie.id}>
                  <div className="absolute top-2 left-2 bg-red-700 text-white p-1 md:p-2 rounded-md">
                    {movie.age}
                  </div>
                  <img
                    src={movie.image}
                    alt=""
                    className="rounded-2xl group-hover:blur-xs duration-300 "
                  />
                  <div className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button className="w-28 mb-2 px-4 py-2 bg-[#8B008B] text-white rounded hover:bg-[#6A006A] cursor-pointer">
                      <Star className="w-4 h-4 mr-1 hidden sm:flex" />
                      Mua vé
                    </Button>
                    <Button className="w-28 px-4 py-2 text-white rounded hover:bg-[#CC9999] border border-white cursor-pointer bg-transparent">
                      <Video />
                      Trailer
                    </Button>
                  </div>
                  <p className="font-bold truncate text-sm md:text-base md:block text-gray-600 hover:text-blue-600 cursor-pointer">
                    {movie.name}
                  </p>
                </div>
              ))}
            </div>
            {/* End */}
          </div>
          <div className="lg:ml-3 px-4 md:px-8 my-20">
            <div className="">
              <h1 className="text-2xl border-l-[4px] border-l-[#8B008B] pl-3 text-xl">
                PHIM SẮP CHIẾU
              </h1>
            </div>
            <div className="space-y-4 text-sm mt-12">
              <p>
                Một mùa hè mới lại đến, khối nghỉ hè bắt đầu xâm chiếm mọi ngóc
                ngách. Để các khối còn lại có thể bình tâm thư giãn, đôi khi là
                “thao túng” được khối nghỉ hè, hãy đến với{" "}
                <strong>Cinemax</strong>, nơi có vô vàn những bộ phim cực kì thú
                vị dành cho mọi người, mọi nhà.
              </p>
              <p>
                Các em nhỏ sẽ được phiêu lưu cùng cậu bé Elio ra ngoài vũ trụ,
                hoặc là chiêm ngưỡng nhưng chú rồng thực thụ trong bản live
                action của <strong>Bí Kíp Luyện Rồng</strong>. Ngoài ra, các vị
                phụ huynh cũng được chiêu đã phần ngoại truyện của John Wick, và
                phần tiếp theo của series 28. Cùng tìm hiểu nha.
              </p>
              <p>
                <span>
                  <a href="#" className="font-semibold text-blue-700">
                    1.Từ Vũ Trụ John Wick: Ballerina – Hành động – 06.06
                  </a>
                </span>
              </p>
              <p>
                Sau nhiều sự chờ đợi, phần ngoại truyện của loạt phim hành động
                vô cùng được yêu thích -{" "}
                <strong>Từ Vũ Trụ John Wick: Ballerina</strong> vừa 'chốt đơn'
                ra rạp tại Việt Nam trong tháng 6 năm nay. Được biết,{" "}
                <strong>Từ Vũ Trụ John Wick: Ballerina </strong>
                sẽ diễn ra giữa các sự kiện sau phần ba và trước phần 4 của John
                Wick, xoay quanh nhân vật chính là nữ sát thủ Eve Maccaro. Tác
                phẩm có sự tham gia của các diễn viên Ana de Armas, Anjelica
                Huston, Norman Reedus và đặc biệt0 là sự trở lại của tài tử
                Keanu Reeves trong vai John Wick.
              </p>
              <p>
                Lấy bối cảnh giữa sự kiện của Sát thủ{" "}
                <i className="text-blue-500">
                  John Wick: Phần 3 – Chuẩn Bị Chiến Tranh
                </i>
                , bộ phim <strong>Từ Vũ Trụ John Wick: Ballerina</strong>
                theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình
                trả thù cho cái chết của gia đình mình, dưới sự huấn luyện của
                tổ chức tội phạm Ruska Roma.
              </p>
              <p>
                <span>
                  <a href="#" className="font-semibold text-blue-700">
                    2.Materialists/ Một Nửa Hoàn Hảo – Hài, Lãng mạn – 27.06
                  </a>
                </span>
              </p>
              <p>
                Với sự góp mặt của Dakota Johnson, Chris Evans và Pedro Pascal,
                bộ phim <strong className="text-blue-700">Materialists</strong>{" "}
                (tựa việt:{" "}
                <strong className="text-blue-700">Một Nửa Hoàn Hảo</strong>)
                đánh dấu màn tái xuất đầy hứa hẹn của nhà làm phim gốc Hàn sau
                cú hích đầu tay vang danh toàn cầu. Đứa con tinh mới nhất của
                Celine Song - đạo diễn đứng sau tuyệt tác Past Lives (2023) -
                tiếp tục hành trình đi tìm lời đáp cho bản chất của tình yêu.
              </p>
              <p>
                <strong className="text-blue-700">Materialists</strong> xoay
                quanh Lucy (Dakota Johnson), một chuyên gia mai mối tình yêu tại
                New York, giúp đỡ khách hàng có thể tìm thấy “mảnh ghép hoàn
                hảo” của cuộc đời mình. Dịch vụ của Lucy được nhiều người săn
                đón, trong khi cô phải tiếp xúc với hàng loạt yêu cầu tìm bạn
                đời kỳ quặc mỗi ngày.
              </p>
              <p>
                <span>
                  <a href="#" className="font-semibold text-blue-700">
                    3.Út Lan: Oán Linh Giữ Của – Kinh dị - 20.06
                  </a>
                </span>
              </p>
              <p>
                <a href="#" className="text-blue-700 font-semibold">
                  Út Lan: Oán Linh Giữ Của
                </a>{" "}
                đã thu hút sự chú ý mạnh mẽ với câu chuyện về “thần giữ của”
                trong văn hóa tâm linh Việt. Đây là thực thể được xem như thần
                hoặc linh hồn với nhiệm vụ trông coi tài sản, kho báu. Từ đó,{" "}
                <i className="text-blue-500">phim chiếu rạp</i> khai thác sâu
                vào những nghi thức hiến tế đầy ám ảnh, lên án hủ tục lạc hậu và
                đề cao khát khao hạnh phúc từ chính nỗ lực của bản thân.{" "}
                <a href="#" className="text-blue-700 font-semibold">
                  Út Lan: Oán Linh Giữ Của
                </a>{" "}
                được đạo diễn bởi Trần Trọng Dần và có sự tham gia của Quốc
                Trường, Mạc Văn Khoa,…
              </p>
              <p>
                <a href="#" className="text-blue-700 font-semibold">
                  Út Lan: Oán Linh Giữ Của
                </a>{" "}
                diễn ra sau sự ra đi của cha, Lan (Phương Thanh) về một vùng quê
                và ở đợ cho nhà ông Danh (Mạc Văn Khoa) - một người đàn ông góa
                vợ, không con cái. Ngay sau khi bước chân vào căn nhà, Lan phải
                đối mặt với hàng loạt hiện tượng kỳ dị và những cái chết bí ẩn
                liên tục xảy ra. Cùng với Sơn (Quốc Trường) - một nhà văn chuyên
                viết truyện kinh dị, Lan bắt đầu lật mở những bí mật kinh hoàng,
                khám phá lịch sử đen tối của căn nhà.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ComingSoonMovies;
