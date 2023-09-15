import { useContext, useState } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { SearchContext } from "../utils/context";
import openai from "../utils/openai";
import SearchResults from "./SearchResults";

const Search = () => {
  const { toggleSearchEnabled } = useContext(SearchContext);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPrompt.length === 0) return;

    const gptPrompt =
      "Act as a movie recommendation system and suggest movies for the query: " +
      searchPrompt +
      ". Give 5 movie/tv show names at maximum. Provide the result as a comma separated string of movie names like in this example given ahead. Example: Gadar 2, Oppenheimer, Sholay, Barbie, Jawan. ";

    const completion = await openai.chat.completions.create({
      messages: [{ role: "assistant", content: gptPrompt }],
      model: "gpt-3.5-turbo",
    });
    const moviesList = completion.choices[0].message.content;
    setSearchResult(moviesList ? moviesList : "");
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
      {searchResult.length > 0 ? <SearchResults result={searchResult} /> : null}
    </div>
  );
};

export default Search;
