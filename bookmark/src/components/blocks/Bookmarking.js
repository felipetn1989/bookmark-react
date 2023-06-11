import Button from "../buttons/Button";

import image from "../images/illustration-features-tab-1.svg";

export default function Bookmarking() {
  return (
    <div className="grid gap-20 my-[3.5625rem]">
      <img
        className="m-auto"
        src={image}
        alt="Drawing of a internet site home screen"
      />
      <div className="grid gap-3.5">
        <h3 className="text-2xl font-medium tracking-wide">Bookmark in one click</h3>
        <p className="text-[#9194a1]">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <Button bg="bg-[#5368df]" textColor="text-white" text="More Info" />
      </div>
    </div>
  );
}
