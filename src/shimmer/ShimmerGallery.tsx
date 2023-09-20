const ShimmerGallery: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="absolute top-[75vh] z-10 w-full bg-gradient-to-t from-black via-black to-transparent pb-10">
      <div className="mx-auto px-20">
        <div className="flex space-x-8 overflow-hidden">
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gray-500 animate-pulse"></div>
          <div className="flex-shrink-0 rounded-lg overflow-hidden w-44 h-64 bg-gradient-to-l from-black via-black to-gray-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerGallery;
