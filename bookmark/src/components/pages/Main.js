import hero from "../images/illustration-hero.svg";

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
        <div className="grid gap-5 px-8">
          <h1 className="text-3xl font-medium tracking-wide leading-[2.4375rem]">
            A Simple Bookmark Manager
          </h1>

          <p className="text-[#9194a1]">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex justify-center gap-4 my-3.5">
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
      <section>

      </section>
    </main>
  );
}
