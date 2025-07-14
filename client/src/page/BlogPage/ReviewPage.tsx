import { useMovies, usePosts } from "@/components/hooks/useQuery";
import type { Movies } from "@/components/interface/movies";
import type { Posts } from "@/components/interface/post";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Eye, ThumbsUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ReviewPage = () => {
  const { data: movies } = useMovies();
  const { data: posts } = usePosts();

  return (
    <div>
      <MainLayout>
        <div className="border-t-4 border-t-gray-200 border-b-4 border-b-gray-200">
          <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-8 my-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div>
                  <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
                  <h1 className="text-xl inline-block font-semibold">
                    BÌNH LUẬN PHIM
                  </h1>
                </div>
                <div className="border-2 border-[#8B008B] my-4"></div>
                <div className="my-6 space-y-2 md:space-y-4">
                  {posts?.map((post: Posts) => (
                    <div className="grid grid-cols-12 gap-2 md:gap-4">
                      <div className="col-span-4">
                        <img
                          src={post.postsUrl}
                          alt=""
                          className="rounded-md"
                        />
                      </div>
                      <div className="col-span-8">
                        <h2 className="text-sm md:text-base">{post.title}</h2>
                        <div className="space-x-2 flex my-3">
                          <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                            <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                            Thích
                          </Button>
                          <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer md:px-4 md:py-2">
                            <Eye className="w-3 h-3 md:w-4 md:h-4" />
                            150
                          </Button>
                        </div>
                        <p className="text-sm text-gray-400 hidden md:block line-clamp-2">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="grid grid-cols-12 gap-2 md:gap-4">
                    <div className="col-span-4">
                      <img
                        src="https://www.galaxycine.vn/media/2025/7/6/750_1751795361496.jpg"
                        alt=""
                        className="rounded-md"
                      />
                    </div>
                    <div className="col-span-8">
                      <h2 className="text-sm md:text-base">
                        [Review] Jurassic World Rebirth: Hollywood Lại Đem Khủng
                        Long Ra "Giỡn"
                      </h2>
                      <div className="space-x-2 flex my-3">
                        <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                          <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                          Thích
                        </Button>
                        <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer md:px-4 md:py-2">
                          <Eye className="w-3 h-3 md:w-4 md:h-4" />
                          150
                        </Button>
                      </div>
                      <p className="text-sm text-gray-400 hidden md:block line-clamp-2">
                        Có thể Jurassic World: Rebirth đem tới cho người xem cảm
                        giác “vắt cạn tinh túy”, cơ mà ở một khía cạnh nào đấy
                        thì phim vẫn đủ làm hài lòng lượng người hâm mộ lâu năm.
                      </p>
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
        <div className="max-w-screen-xl mx-auto my-6 py-2 px-4 md:px-8">
          <div className="my-4">
            <span className="border-l-4 border-solid border-l-[#8B008B] mr-2"></span>
            <h1 className="text-xl inline-block font-semibold">CINEMAX</h1>
          </div>
          <div className="text-sm space-y-3 text-gray-600">
            <p>
              Những khi tới rạp chiếu phim để thưởng thức các tác phẩm đang làm
              mưa làm gió, ít nhiều gì ở phía người xem luôn đọng lại nhiều cảm
              xúc và suy nghĩ. Có những phim khiến công chúng bàn tán suốt về ý
              nghĩa thật sự mà nó mang tới. Cũng có lúc người ta nhăn nhó bởi vì
              quá nhiều tình tiết phức tạp được cài cắm, bắt buộc cần có kiến
              thức nền về điện ảnh mới có thể thấu hiểu.
            </p>
            <p>
              Điện ảnh ngay từ những ngày đầu hình thành đã được xem là loại
              hình giải trí vô cùng tiềm năng. Trải nghiệm do phim ảnh mang tới
              là muôn vạn điều thú vị. Có lẽ vậy nên với những ai chỉ xem phim
              trên tinh thần “vui là chính”, thì chỉ cần đấy không phải một tác
              phẩm quá tệ đã đủ làm hài lòng họ. Lại có khán giả cho rằng điện
              ảnh là một loại hình nghệ thuật bao quát hết tất cả các hình thức
              nghệ thuật khác, họ xem phim để khám phá, tìm tòi tầng tầng lớp
              lớp ý nghĩa ẩn sâu sau những câu thoại và cảnh quay.
            </p>
            <p>
              Đắn đo khi lựa chọn phim để xem, hoặc muốn hiểu rõ hơn về các
              thông điệp ẩn mà đạo diễn cài cắm. Galaxy Cinema sẽ cho bạn vài
              gợi ý với những bài bình luận phim mới nhất, đi cùng các đánh giá
              kèm sự phân tích mang tính chuyên môn đối với những tác phẩm đang
              ra mắt tại rạp chiếu phim. Được viết bởi những cây bút có kinh
              nghiệm và chuyên sâu về kiến thức điện ảnh, bạn sẽ dễ dàng tìm
              được những bài bình luận hoặc phân tích với đa dạng thể loại từ
              hành động, tình cảm…, đến khoa học viễn tưởng, kinh dị.
            </p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default ReviewPage;
