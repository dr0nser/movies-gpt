import { useContext, useState } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { SearchContext } from "../utils/context";
import axios from "axios";
import { auth } from "../utils/firebase";
import { Movie } from "../utils/types";
import SearchResult from "./SearchResult";

const Search = () => {
  const { toggleSearchEnabled } = useContext(SearchContext);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [searchResult, setSearchResult] = useState<Movie[] | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPrompt.length === 0) return;
    const response = await axios.get(
      `http://localhost:8080/api/chat?userId=${auth.currentUser?.uid}&query=${searchPrompt}`
    );
    setSearchResult(response.data);
  };

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
          <div className="w-full flex justify-around pt-52 text-center">
            <form
              className="bg-white w-1/2 py-4 flex items-center px-5 rounded-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="bg-transparent w-full pl-3 text-xl text-gray-600 focus:outline-none"
                type="text"
                placeholder="Enter prompt here..."
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
              />
              <button className="text-red-600 text-2xl">
                <FaMagnifyingGlass />
              </button>
            </form>
          </div>
        </div>
      </div>
      {searchResult && searchResult.length > 0 ? (
        <SearchResult movies={searchResult} />
      ) : null}
    </div>
  );
};

export default Search;
