const PortifolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <>
    <a href={link} target="_blank" rel="noreferrer">
    <div
      className="relative w-60 h-80 items-baseline rounded-md shadow-xl mb-5"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black opacity-50 w-full h-full hover:opacity-0 rounded-md"></div>
        <div className="w-full p-4 absolute inset-x-0 bottom-0 ">
          <h3 className="text-base text-white text-left md:text-lg mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {stack.map((item) => (
              <span className="inline-block text-black px-2 py-1 font-semibold bg-white rounded-md hover:text-white hover:bg-gray-800">
                {item}
              </span>
            ))}
          </p>
      </div>
    </div>
    </a>
    </>
  );
};

export default PortifolioItem;
