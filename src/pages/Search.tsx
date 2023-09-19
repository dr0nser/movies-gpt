import { useState } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import { auth } from "../utils/firebase";
import { Movie } from "../utils/types";
import Header from "../components/Header";
import SearchResult from "../components/SearchResult";

const Search: React.FunctionComponent = (): JSX.Element => {
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
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div
        className="w-full flex-grow relative bg-cover"
        style={{ backgroundImage: `url(${LOGIN_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="h-full w-full">
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
    </div>
  );
};

export default Search;
