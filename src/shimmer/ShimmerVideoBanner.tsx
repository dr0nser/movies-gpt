import { AiOutlineLoading } from "react-icons/ai";

const ShimmerVideoBanner: React.FunctionComponent = (): JSX.Element | null => {
  return (
    <>
      <div className="bg-transparent h-screen w-full">
        <AiOutlineLoading className="animate-spin text-white text-6xl mx-auto mt-80" />
      </div>
    </>
  );
};

export default ShimmerVideoBanner;
