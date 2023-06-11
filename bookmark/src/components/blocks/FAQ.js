import Button from "../buttons/Button";

import arrow from "../images/icon-arrow.svg";

export default function FAQ() {
  return (
    <div className="grid gap-4 px-8 mt-[8.6875rem]">
      <h2 className="text-2xl font-medium px-2 tracking-wide">
        Frequently Asked Questions
      </h2>
      <p className="text-[#9194a1]">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className="mt-[1.9375rem] mb-7">
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm tracking-wider">What is Bookmark?</h3>
            <img src={arrow} alt="Arrow icon" />
          </div>
          <p className="hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm tracking-wider">
              How can I request a new browser?
            </h3>
            <img src={arrow} alt="Arrow icon" />
          </div>
          <p className="hidden">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm tracking-wider">Is there a mobile app?</h3>
            <img src={arrow} alt="Arrow icon" />
          </div>
          <p className="hidden">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </div>
        <div className="border-b py-[1.375rem] hover:cursor-pointer hover:text-[#fa5757]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm tracking-wider">
              What about other Chromium browsers?
            </h3>
            <img src={arrow} alt="Arrow icon" />
          </div>
          <p className="hidden">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </p>
        </div>
      </div>
      <Button
        bg="bg-[#5368df]"
        textColor="text-white"
        text="More Info"
        width="w-28"
      />
    </div>
  );
}
