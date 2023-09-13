const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className="z-10 h-16 w-full bg-gradient-to-b from-black to-transparent sticky top-0 left-0">
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
