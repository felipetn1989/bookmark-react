import image from "../images/illustration-features-tab-3.svg";

export default function Sharing() {
  return (
    <div className="relative flex flex-col gap-20 my-[3.5625rem] lg:my-11 lg:gap-32 lg:flex-row lg:px-[8.5rem]">
      <img
        className="m-auto lg:m-[unset]"
        src={image}
        alt="Drawing of a internet site home screen"
      />
      <div className="absolute top-[2.1875rem] left-[-2rem] h-[12.75rem] w-[97%] bg-[#5368df] -z-10 rounded-r-full m-auto lg:w-[46.5%] lg:top-20 lg:h-[22rem]"></div>
      <div className="flex flex-col gap-3.5 lg:text-left lg:gap-7">
        <h3 className="text-2xl font-medium tracking-wide lg:text-[2rem] lg:mt-16">
          Share your bookmarks
        </h3>
        <p className="text-[#9194a1] lg:text-lg">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button
          className={`bg-[#5368df] text-white text-sm font-medium shadow-md px-[1.1875rem] py-3.5 tracking-wide rounded-md m-auto hover:bg-white hover:text-[#5368df] lg:m-[unset] lg:px-6 lg:self-start lg:mt-1`}
        >
          More Info
        </button>
      </div>
    </div>
  );
}
