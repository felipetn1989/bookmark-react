import hero from "../images/illustration-hero.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

import Button from "../buttons/Button";

import Features from "../blocks/Features";
import FAQ from "../blocks/FAQ";
import MailForm from "../blocks/MailForm";

export default function Main() {
  return (
    <main className="text-center">
      <section className="relative grid gap-[3.625rem] my-9 m-auto lg:flex lg:flex-row-reverse lg:px-14 lg:my-14 lg:max-w-[110rem]">
        <img
          className="w-[22rem] m-auto lg:w-[30rem] xl:w-[41rem]"
          src={hero}
          alt="Drawing of a tablet screen"
        />
        <div className="absolute top-[3.5rem] right-0 h-[12.75rem] w-[79%] bg-[#5368df] -z-10 rounded-l-full lg:top-[8.75rem] xl:h-[22.125rem] lg:w-[36%]"></div>
        <div className="grid gap-5 place-content-center px-8 lg:text-left lg:ml-[4.8125rem] lg:mt-[-0.5625rem] lg:gap-7">
          <h1 className="text-3xl font-medium tracking-wide leading-[2.4375rem] xl:text-5xl">
            A Simple Bookmark Manager
          </h1>

          <p className="text-[#9194a1] xl:text-[1.1875rem]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex justify-center gap-4 my-3.5 max-w-lg m-auto lg:justify-start lg:m-[unset] xl:mt-1">
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

      <section className="grid place-content-center gap-3 mt-8 px-8 max-w-5xl m-auto">
        <h2 className="text-2xl font-medium tracking-wide">
          Download the extension
        </h2>

        <p className="text-[#9194a1]">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>

        <div className="grid gap-10 mt-7 m-auto">
          <div className="shadow-md pt-12 pb-6 grid gap-0.5 place-content-center w-[17.5rem] rounded-xl">
            <img className="m-auto mb-8" src={chrome} alt="Chrome logo" />
            <h3 className="text-xl font-medium tracking-wider">
              Add to Chrome
            </h3>
            <p className="border-dotted border-b-[4px] pb-9 mb-[1.3125rem]">
              Minimum version 62
            </p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-[14.4375rem]"
            />
          </div>
          <div className="shadow-md pt-12 pb-6 grid gap-0.5 place-content-center w-[17.5rem] rounded-xl">
            <img className="m-auto mb-8" src={firefox} alt="Firefox logo" />
            <h3 className="text-xl font-medium tracking-wider">
              Add to Firefox
            </h3>
            <p className="border-dotted border-b-[4px] pb-9 mb-[1.3125rem]">
              Minimum version 46
            </p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-[14.4375rem]"
            />
          </div>
          <div className="shadow-md pt-12 pb-6 grid gap-0.5 place-content-center w-[17.5rem] rounded-xl">
            <img className="m-auto mb-8" src={opera} alt="Opera logo" />
            <h3 className="text-xl font-medium tracking-wider">Add to Opera</h3>
            <p className="border-dotted border-b-[4px] pb-9 mb-[1.3125rem]">
              Minimum version 55
            </p>
            <Button
              bg="bg-[#5368df]"
              textColor="text-white"
              text="Add & Install Extension"
              width="w-[14.4375rem]"
            />
          </div>
        </div>
      </section>

      <FAQ />

      <MailForm />
    </main>
  );
}
