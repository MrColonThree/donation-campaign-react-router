const Banner = () => {
  return (
    <div className="bg-banner-bg bg-cover object-none bg-center  bg-no-repeat h-[80vh]  relative  flex justify-center items-center">
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="z-10 flex flex-col items-center gap-10">
        <h1 className="text-5xl text-center font-bold">I Grow By Helping People In Need</h1>
        <div className="text-lg ">
        <input className=" px-2 py-1" type="search"
        placeholder="Search here..." />
        <button className="bg-[#FF444A] text-white  font-semibold px-3 py-1 " type="search">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
