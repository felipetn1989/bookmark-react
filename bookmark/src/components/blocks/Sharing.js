import Button from "../buttons/Button";

import image from "../images/illustration-features-tab-3.svg";

export default function Sharing() {
  return (
    <div>
      <div className="grid gap-20 my-[3.5625rem]">
        <img
          className="m-auto"
          src={image}
          alt="Drawing of a internet site home screen"
        />
        <div className="grid gap-3.5">
          <h3 className="text-2xl font-medium tracking-wide">
            Share your bookmarks
          </h3>
          <p className="text-[#9194a1]">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <Button bg="bg-[#5368df]" textColor="text-white" text="More Info" />
        </div>
      </div>
    </div>
  );
}
