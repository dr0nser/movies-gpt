import { useEffect, useState } from "react";

const Header: React.FunctionComponent = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-10 h-16 w-full sticky top-0 left-0 transition-all duration-150 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="px-20 h-full mx-auto flex justify-between items-center">
        <p className="text-4xl font-bold tracking-tight text-red-600">
          MoviesGPT
        </p>
        {/* Make the profile dropdown here */}
      </div>
    </header>
  );
};

export default Header;
