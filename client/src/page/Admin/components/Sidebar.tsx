import { Film, Home, LogOut, Ticket, User } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <div>
      <div
        className={`flex flex-col bg-white overflow-hidden transition-all duration-300
    ${sidebarOpen ? "w-46" : "w-16"}
  `}
      >
        <div className="flex flex-col h-screen bg-white overflow-hidden">
          <div className="flex items-center justify-center h-18 shadow-md">
            <img
              src="/logo.png"
              alt=""
              className={`${
                sidebarOpen ? "w-32" : "w-10"
              } transition-all duration-300`}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between px-2">
            <ul className="flex flex-col py-4 gap-1">
              <li>
                <Link
                  to="/admin"
                  className="flex flex-row items-center h-12 px-2 hover:translate-x-2 transition-all text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <Home />
                  </span>
                  <span
                    className={`text-sm font-medium transition-all duration-200 ${
                      sidebarOpen
                        ? "opacity-100 ml-2"
                        : "opacity-0 w-0 ml-0 overflow-hidden"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/user"
                  className="flex flex-row items-center h-12 px-2 hover:translate-x-2 transition-all text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <User />
                  </span>
                  <span
                    className={`text-sm font-medium transition-all duration-200 ${
                      sidebarOpen
                        ? "opacity-100 ml-2"
                        : "opacity-0 w-0 ml-0 overflow-hidden"
                    }`}
                  >
                    User
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/movie"
                  className="flex flex-row items-center h-12 px-2 hover:translate-x-2 transition-all text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <Film />
                  </span>
                  <span
                    className={`text-sm font-medium transition-all duration-200 ${
                      sidebarOpen
                        ? "opacity-100 ml-2"
                        : "opacity-0 w-0 ml-0 overflow-hidden"
                    }`}
                  >
                    Movies
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="flex flex-row items-center h-12 px-2 hover:translate-x-2 transition-all text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <Ticket />
                  </span>
                  <span
                    className={`text-sm font-medium transition-all duration-200 ${
                      sidebarOpen
                        ? "opacity-100 ml-2"
                        : "opacity-0 w-0 ml-0 overflow-hidden"
                    }`}
                  >
                    Ticket
                  </span>
                </Link>
              </li>
            </ul>
            <div className="pb-4 flex justify-center">
              <Link
                to="/auth"
                className={`flex items-center gap-2 bg-[#CC9999] text-white hover:opacity-80 px-4 py-2 rounded transition-all duration-200 ${
                  sidebarOpen ? "" : "justify-center px-2"
                }`}
              >
                <LogOut className="w-4 h-4" />
                <span
                  className={`text-sm font-medium transition-all duration-200 ${
                    sidebarOpen
                      ? "opacity-100 ml-2"
                      : "opacity-0 w-0 ml-0 overflow-hidden"
                  }`}
                >
                  Đăng Xuất
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
