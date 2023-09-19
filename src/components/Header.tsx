import { auth } from "../utils/firebase";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { PROFILE_ICON } from "../utils/constants";

const Header: React.FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <header className="z-30 h-16 w-full sticky top-0 left-0 bg-black">
      <div className="px-12 h-full mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-4xl font-extrabold text-red-600">
          MoviesGPT
        </Link>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 mr-1">
            <img src={PROFILE_ICON} />
            <span className="text-xl text-gray-50">
              {auth.currentUser
                ? auth.currentUser.displayName?.split(" ")[0]
                : ""}
            </span>
          </div>
          <Link
            to={"/search"}
            className="text-gray-200 hover:bg-red-600 hover:text-gray-50 px-4 py-2 font-medium rounded-md flex items-center space-x-1 transition-all duration-150"
          >
            <FaMagnifyingGlass />
            <span>Search movies using AI</span>
          </Link>

          <button
            className="text-gray-200 hover:bg-red-600 hover:text-gray-50 px-2 py-2 font-medium rounded-md transition-all duration-150"
            onClick={() => handleSignOut()}
          >
            <span className="antialiased">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
