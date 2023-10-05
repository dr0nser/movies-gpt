import { useState, useEffect } from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import { auth } from "../utils/firebase";
import { Movie } from "../utils/types";
import SearchResult from "../components/SearchResult";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import ShimmerSearchResult from "../shimmer/ShimmerSearchResult";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fetchData = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(
    `${import.meta.env.VITE_API_DOMAIN}api/search?userId=${
      auth.currentUser?.uid
    }&query=${query}`
  );
  return response.data as Movie[];
};

const Search: React.FunctionComponent = (): JSX.Element => {
  const mutation: UseMutationResult<Movie[], unknown, string, unknown> =
    useMutation(fetchData);
  const [searchPrompt, setSearchPrompt] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchPrompt.length === 0) return;
    mutation.mutate(searchPrompt);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "-1vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-screen w-full"
    >
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
                <button type="submit" className="text-red-600 text-2xl">
                  <FaMagnifyingGlass />
                </button>
              </form>
            </div>
          </div>
        </div>
        {mutation.isLoading && <ShimmerSearchResult />}
        {mutation.isSuccess && mutation.data && (
          <SearchResult movies={mutation.data} />
        )}
      </div>
    </motion.div>
  );
};

export default Search;
