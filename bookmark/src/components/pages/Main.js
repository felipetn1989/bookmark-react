import hero from "../images/illustration-hero.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

import Button from "../buttons/Button";

import Features from "../blocks/Features";

export default function Main() {
  return (
    <main className="text-center">
      <section className="grid gap-[3.625rem] my-9">
        <img
          className="w-[22rem] m-auto"
          src={hero}
          alt="Drawing of a tablet screen"
        />
        <div className="grid gap-5 place-content-center px-8">
          <h1 className="text-3xl font-medium tracking-wide leading-[2.4375rem]">
            A Simple Bookmark Manager
          </h1>

          <p className="text-[#9194a1]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex justify-center gap-4 my-3.5 place-content-center">
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Get it on Chrome"
            />
            <Button
              bg="bg-white"
              textColor="text-[#252b46]"
              text="Get it on Firefox"
            />
          </div>
        </div>
      </section>

      <Features />

      <section className="grid gap-3 mt-8 px-8">
        <h2 className="text-2xl font-medium tracking-wide">
          Download the extension
        </h2>

        <p className="text-[#9194a1]">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <div className="mt-7">
          <div className="shadow-md py-12 grid gap-0.5">
            <img className="m-auto mb-8" src={chrome} alt="Chrome logo" />
            <h3 className="text-xl font-medium tracking-wider">Add to Chrome</h3>
            <p className="border-dotted border-b-[4px]">Minimum version 62</p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-56"
            />
          </div>
          <div className="shadow-md py-12 grid gap-0.5 place-content-center">
            <img className="m-auto mb-8" src={opera} alt="Opera logo" />
            <h3 className="text-xl font-medium tracking-wider">Add to Firefox</h3>
            <p className="border-dotted border-b-[4px]">Minimum version 55</p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-56"
            />
          </div>
          <div className="shadow-md py-12 grid gap-0.5 place-content-center">
            <img className="m-auto mb-8" src={firefox} alt="Firefox logo" />
            <h3 className="text-xl font-medium tracking-wider">Add to Opera</h3>
            <p className="border-dotted border-b-[4px]">Minimum version 46</p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-56"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
