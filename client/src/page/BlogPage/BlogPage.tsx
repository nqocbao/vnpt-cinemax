import { useMovies } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Eye, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { data: movies } = useMovies();
  return (
    <MainLayout>
      <div className="border-t-4 border-t-gray-200">
        <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-8 my-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 lg:col-span-8 ">
              <h1 className="text-3xl font-bold">
                Final Destination Bloodlines: Hé Lộ Bí Mật Về Vòng Lặp Tử Thần
              </h1>
              <div className="space-x-2 flex my-3">
                <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                  <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                  Thích
                </Button>
                <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                  Chia sẻ
                </Button>
                <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer md:px-4 md:py-2">
                  <Eye className="w-3 h-3 md:w-4 md:h-4" />
                  150
                </Button>
              </div>
              <div className="space-y-3 text-sm">
                <p>
                  Sau 14 năm vắng bóng, thương hiệu kinh dị đình đám Final
                  Destination chính thức trở lại với phần{" "}
                  <a href="" className="text-blue-600">
                    phim mới
                  </a>{" "}
                  –{" "}
                  <i>
                    Final Destination: Bloodlines (Lưỡi Hái Tử Thần: Huyết
                    Thống).
                  </i>{" "}
                  Tác phẩm không chỉ mang đến những màn tử nạn rợn tóc gáy, mà
                  còn hé lộ bí ẩn đã bị che giấu suốt nhiều năm qua về vòng lặp
                  chết chóc của Tử Thần.
                </p>
                <img
                  src="https://www.galaxycine.vn/media/2025/4/17/1135-1_1744861010442.jpg"
                  alt=""
                  className="md:px-20"
                />
                <p>
                  <i>Lưỡi Hái Tử Thần: Huyết Thống</i> theo chân Stefani
                  (Kaitlyn Santa Juana thủ vai), cô sinh viên đại học vô tình bị
                  cuốn vào vòng xoáy định mệnh khi những cơn ác mộng kinh hoàng
                  liên tục báo trước về “án tử” đang cận kề. Stefani buộc phải
                  trở về nhà để tìm kiếm người duy nhất có thể giúp cô phá vỡ
                  lời nguyền đã ám ảnh gia đình suốt nhiều thế hệ. Liệu Stefani
                  có thực sự nắm trong tay cơ hội sống sót, hay chính cô sẽ trở
                  thành mắt xích tiếp theo trong vòng tròn tiền định của Tử
                  Thần?
                </p>
                <p>
                  Vừa qua, Warner Bros. Pictures và New Line Cinema đã trình
                  làng trailer mới nhất của{" "}
                  <i className="font-medium">Final Destination: Bloodlines</i>,
                  hé lộ những giây phút thót tim khi thời khắc sinh tử đang từng
                  bước siết chặt cả nhà Stefani.
                </p>
                <p>
                  Mở đầu với hình ảnh bữa tiệc sân vườn ấm áp, ngay sau đó mọi
                  việc nhanh chóng trở thành nỗi ám ảnh khi từng thành viên bị
                  đe dọa bởi những vật dụng tưởng chừng vô hại: chiếc máy cắt
                  cỏ, ly nước vỡ tung hay thậm chí chỉ là một tấm bạt nhảy lò
                  xo…
                </p>
                <img
                  src="https://www.galaxycine.vn/media/2025/4/17/1135-2_1744861033113.jpg"
                  alt=""
                  className="md:px-20"
                />
                <p>
                  Trailer cũng lần đầu tiết lộ một sự thật chấn động: Thần Chết
                  lẽ ra đã tìm đến nhà của Stefanie từ rất lâu nhưng ảnh hưởng
                  của hắn đã bị gián đoạn bởi người bà quá cố của cô – người
                  cũng sở hữu năng lực linh cảm và đã dùng nó để cứu mạng những
                  người có mặt ở đó. Luật chơi của Thần Chết chưa bao giờ thay
                  đổi. Những kẻ trốn thoát sớm muộn gì cũng phải trả giá. Giờ
                  đây, sau nhiều năm trì hoãn, Thần Chết trở lại để lấy đi những
                  gì hắn đáng lẽ đã hoàn thành từ lâu.
                </p>
                <p>
                  Nhận lại "bí kíp sinh tồn" từ người bà của mình, Stefanie hiểu
                  rằng cô chính là niềm hy vọng cuối cùng. Tuy vậy, có thật sự
                  tồn tại cách thoát khỏi quy luật nghiệt ngã này? Hay tất cả
                  chỉ là nỗ lực vô ích trước một kẻ săn mồi không thể bị đánh
                  bại?
                </p>
                <p>
                  Với những ai là fan lâu năm của <i>Final Destination</i>, chắc
                  chắn không thể quên William Bludworth – nhân vật bí ẩn với sự
                  am hiểu sâu sắc về Thần Chết và quy tắc của nó. Xuyên suốt
                  loạt phim, khán giả luôn đặt ra giả thuyết rằng Bludworth
                  chính là hiện thân của Thần Chết, hoặc ít nhất là một sứ giả
                  quan trọng của hắn.
                </p>
                <img
                  src="https://www.galaxycine.vn/media/2025/4/17/1135-3_1744861050481.jpg"
                  alt=""
                  className="md:px-20"
                />
                <p>
                  Tuy nhiên, bởi sự ra đi của cố diễn viên Tony Todd, lần xuất
                  hiện cuối cùng của Bludworth trong{" "}
                  <i className="font-semibold">Final Destination: Bloodlines</i>{" "}
                  mang ý nghĩa hoàn toàn khác. Lần này, William Bludworth không
                  chỉ đại diện cho cái chết trong phim, mà còn phản ánh hiện
                  thực rằng Todd đã thực sự rời xa thế giới này. Đây sẽ là
                  khoảnh khắc đầy xúc động và đặc biệt đối với những người hâm
                  mộ, khi họ được chứng kiến màn tái xuất của ông – một lời chào
                  tạm biệt đầy ấn tượng lẫn sâu lắng
                </p>
                <p>
                  Dưới sự chỉ đạo của bộ đôi đạo diễn Adam Stein và Zach
                  Lipovsky, kịch bản được chấp bút bởi Jon Watts, Guy Busick -
                  Lori Evans Taylor,{" "}
                  <i className="font-semibold">Lưỡi Hái Tử Thần: Huyết Thống</i>{" "}
                  mang đến những màn “đăng xuất” đầy sáng tạo và ghê rợn, bên
                  cạnh đó còn đi sâu vào cội nguồn của “lời nguyền” – thứ chưa
                  từng được khám phá trước đây.
                </p>
                <p>
                  <i className="font-semibold">Final Destination: Bloodlines</i>{" "}
                  nhiều khả năng sẽ phát hành với định dạng IMAX, hứa hẹn mang
                  đến trải nghiệm “đẫm máu” cho người xem vào mùa hè năm nay.
                  Hãy sẵn sàng đối mặt với Thần Chết, lần này, không ai toàn
                  mạng!
                </p>
              </div>
              <div className="my-10 space-y-3">
                <div>
                  <h1 className="text-2xl font-semibold border-l-[4px] border-l-[#8B008B] pl-3">
                    Bài viết liên quan
                  </h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <img
                      src="https://cdn.galaxycine.vn/media/2025/7/6/750_1751795361496.jpg"
                      alt=""
                      className="rounded-md"
                    />
                    <h2 className="text-gray-600 mt-3">
                      <a href="">
                        [Review] Jurassic World Rebirth: Hollywood Lại Đem Khủng
                        Long Ra "Giỡn"
                      </a>
                    </h2>
                  </div>
                  <div>
                    <img
                      src="https://cdn.galaxycine.vn/media/2025/7/2/phim-hay-thang-07-2025-5_1751445924509.jpg"
                      alt=""
                      className="rounded-md"
                    />
                    <h2 className="text-gray-600 mt-3">
                      <a href="">
                        Phim Hay Tháng 07.2025: Huyền Thoại Tái Sinh!
                      </a>
                    </h2>
                  </div>
                  <div>
                    <img
                      src="https://cdn.galaxycine.vn/media/2025/6/25/fundiin-2_1750864524792.jpg"
                      alt=""
                      className="rounded-md"
                    />
                    <h2 className="text-gray-600 mt-3">
                      <a href="">Fundiin Đã Có Mặt Tại Galaxy Cinema</a>
                    </h2>
                  </div>
                  <div>
                    <img
                      src="https://cdn.galaxycine.vn/media/2025/6/26/rv-elio-750_1750911595674.jpg"
                      alt=""
                      className="rounded-md"
                    />
                    <h2 className="text-gray-600 mt-3">
                      <a href="">
                        [Review] Elio: Hành Trình Khám Phá Bản Thân Tràn Ngập
                        Sắc Màu
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-4 space-y-3">
              <div className="">
                <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
                <h1 className="text-xl inline-block font-semibold">
                  PHIM ĐANG CHIẾU
                </h1>
              </div>
              {movies
                ?.filter((item: Movies) => Number(item.id) % 2 === 1)
                .map(
                  (item: Movies, index: number) =>
                    index < 3 && (
                      <div className="space-y-2">
                        <Link to={`/detail/${item.id}`}>
                          <img
                            src={item.posterUrl}
                            alt=""
                            className="w-full max-h-[230px] rounded-lg hover:opacity-80"
                          />
                        </Link>
                        <p className="font-semibold">
                          <Link to={`/detail/${item.id}`}>{item.title}</Link>
                        </p>
                      </div>
                    )
                )}

              <div className="flex flex-col items-center">
                <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer">
                  <Link to="/now-movies">Xem Thêm</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
