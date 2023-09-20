import { AiOutlineLoading } from "react-icons/ai";

const ShimmerSearchResult: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="absolute bottom-0 h-64 z-10 bg-gradient-to-t from-black via-black to-transparent w-full">
      <AiOutlineLoading className="animate-spin text-white text-6xl mx-auto" />
    </div>
  );
};

export default ShimmerSearchResult;
