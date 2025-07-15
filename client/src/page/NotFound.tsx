import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      <h1 className="text-[150px] font-extrabold text-gray-300 leading-none select-none">
        404
      </h1>
      <h2 className="text-2xl font-semibold mt-[-1rem] text-gray-800">
        Oops! This Page Could Not Be Found
      </h2>
      <p className="text-sm text-center text-gray-500 max-w-md mt-4">
        Sorry but the page you are looking for does not exist, has been removed, name changed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
