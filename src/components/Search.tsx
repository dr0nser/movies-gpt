import { useContext } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { SearchContext } from "../utils/context";

const Search = () => {
  const { toggleSearchEnabled } = useContext(SearchContext);

  return (
    <div
      className="w-full h-full relative bg-cover"
      style={{ backgroundImage: `url(${LOGIN_BACKGROUND})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative">
        <div className="h-full w-full">
          <button
            className="text-gray-400 absolute top-0 right-0 text-4xl p-6"
            onClick={() => toggleSearchEnabled()}
          >
            <HiXMark className="stroke-1" />
          </button>
          <div className="w-full flex justify-around pt-64 text-center">
            <form className="bg-white w-1/2 py-4 flex items-center px-5 rounded-full">
              <input
                className="bg-transparent w-full pl-3 text-xl text-gray-600 focus:outline-none"
                type="text"
                placeholder="Enter prompt here..."
              />
              <button className="text-red-600 text-2xl">
                <FaMagnifyingGlass />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
