import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-8 md:my-14">
        <div className="my-8 md:my-14">
          <div className="lg:ml-3 px-4">
            <Tabs defaultValue="comment" className="w-full space-y-6">
              <TabsList className="md:gap-x-8 gap-x-6 flex flex-wrap justify-start">
                <h1 className="text-2xl font-semibold border-l-[4px] border-l-[#8B008B] pl-3 hidden md:flex">
                  GÓC ĐIỆN ẢNH
                </h1>
                <TabsTrigger
                  value="comment"
                  className="text-gray-500 data-[state=active]:text-[#8B008B] hover:text-[#8B008B] px-2 py-2 rounded-none text-base !shadow-none cursor-pointer"
                >
                  Bình luận phim
                </TabsTrigger>
                <TabsTrigger
                  value="blog"
                  className="text-gray-500 data-[state=active]:text-[#8B008B] hover:text-[#8B008B] px-2 py-2 rounded-none text-base !shadow-none cursor-pointer"
                >
                  Blog điện ảnh
                </TabsTrigger>
              </TabsList>
              {/* Comment */}
              <TabsContent
                value="comment"
                className="md:grid md:grid-cols-2 md:gap-6 w-full"
              >
                <div className="space-y-4 md:space-y-6 mb-4 md:mb-0">
                  <Link to="/blog-movie">
                    <img
                      src="/blog1.jpg"
                      alt=""
                      className="w-full transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                  </Link>
                  <p className="text-xl font-semibold text-gray-700 hover:text-[#8B008B] cursor-pointer  line-clamp-3">
                    <Link to="/blog-movie">
                      [Review] How To Train Your Dragon: Live Action Hoàn Hảo
                      Của Bí Kíp Luyện Rồng?
                    </Link>
                  </p>
                  <div className="space-x-2 flex">
                    <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                      <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                      Thích
                    </Button>
                    <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer md:px-4 md:py-2">
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      150
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-4">
                    <img
                      src="/blog2.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        <Link to="/blog-movie">
                          {" "}
                          [Review] How To Train Your Dragon: Live Action Hoàn
                          Hảo Của Bí Kíp Luyện Rồng?
                        </Link>
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/blog3.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        <Link to="/blog-movie">
                          [Review] How To Train Your Dragon: Live Action Hoàn
                          Hảo Của Bí Kíp Luyện Rồng?
                        </Link>
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/blog1.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        <Link to="/blog-movie">
                          [Review] How To Train Your Dragon: Live Action Hoàn
                          Hảo Của Bí Kíp Luyện Rồng?
                        </Link>
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* End Comment */}
              {/* Blog */}
              <TabsContent
                value="blog"
                className="md:grid md:grid-cols-2 md:gap-6 w-full"
              >
                <div className="space-y-4 md:space-y-6 mb-4 md:mb-0">
                  <img
                    src="/blog4.jpg"
                    alt=""
                    className="w-full transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                  />
                  <p className="text-xl font-semibold text-gray-700 hover:text-[#8B008B] cursor-pointer  line-clamp-3">
                    [Review] How To Train Your Dragon: Live Action Hoàn Hảo Của
                    Bí Kíp Luyện Rồng?
                  </p>
                  <div className="space-x-2 flex">
                    <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer md:px-4 md:py-2">
                      <ThumbsUp className="w-3 h-3 md:w-4 md:h-4" />
                      Thích
                    </Button>
                    <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer md:px-4 md:py-2">
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      150
                    </Button>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-4">
                    <img
                      src="/blog2.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        [Review] How To Train Your Dragon: Live Action Hoàn Hảo
                        Của Bí Kíp Luyện Rồng?
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/blog3.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        [Review] How To Train Your Dragon: Live Action Hoàn Hảo
                        Của Bí Kíp Luyện Rồng?
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img
                      src="/blog1.jpg"
                      alt=""
                      className="w-1/3 h-auto transition duration-300 ease-in-out hover:scale-105 rounded-md cursor-pointer"
                    />
                    <div className="w-2/3 space-y-2 space-x-2">
                      <p className="text-sm text-gray-600 lg:text-black md:text-base lg:text-xl md:font-semibold hover:text-[#8B008B] cursor-pointer line-clamp-2">
                        [Review] How To Train Your Dragon: Live Action Hoàn Hảo
                        Của Bí Kíp Luyện Rồng?
                      </p>
                      <Button className="bg-blue-600 text-white text-xs gap-1 hover:bg-blue-800 cursor-pointer">
                        <ThumbsUp className="w-4 h-4" />
                        Thích
                      </Button>
                      <Button className="bg-gray-300 text-black text-xs gap-1 hover:bg-gray-400 cursor-pointer">
                        <Eye className="w-4 h-4" />
                        150
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* End Blog */}
            </Tabs>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Button className="border border-[#8B008B] text-[#8B008B] hover:bg-[#8B008B] hover:text-white rounded-none cursor-pointer">
            Xem Thêm
          </Button>
        </div>
      </div>
      <div className="border-b-[6px] border-b-[#f4f4f4]"></div>
    </div>
  );
};

export default Blog;
