import { useState } from "react";
import logo from "../images/logo-bookmark-white.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import facebookIconRed from "../images/icon-facebook-red.svg";
import twitterIconRed from "../images/icon-twitter-red.svg";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const socialMedia = ["facebook", "twitter"];
  const socialMediaIcons = [facebookIcon, twitterIcon];
  const socialMediaIconsRed = [facebookIconRed, twitterIconRed];

  const handleMouseEnter = (e) => {
    setHoveredIcon(e.target.id);
  };

  const handleMouseLeave = () => {
    setHoveredIcon("");
  };

  return (
    <footer className="bg-[#252b46] grid gap-10 place-content-center text-white py-10 lg:flex lg:items-center lg:justify-between lg:py-8 lg:px-[10.3125rem]">
      <div className="lg:flex lg:items-center lg:gap-16">
        <img src={logo} alt="Bookmark logo" />
        <ul className="space-y-7 text-center uppercase font-medium text-sm tracking-[0.125rem] mt-10 lg:flex lg:space-y-[unset] lg:mt-[unset] lg:text-xs lg:gap-12">
          <li className="hover:cursor-pointer hover:text-[#fa5757]">Features</li>
          <li className="hover:cursor-pointer hover:text-[#fa5757]">Pricing</li>
          <li className="hover:cursor-pointer hover:text-[#fa5757]">Contact</li>
        </ul>
      </div>
      <div className="flex justify-center gap-10 mt-1.5">
        {socialMedia.map((media, index) => (
          <img
            key={index}
            id={media}
            className="hover:cursor-pointer lg:mt-[-0.25rem]"
            src={
              hoveredIcon === media
                ? socialMediaIconsRed[index]
                : socialMediaIcons[index]
            }
            alt={`${media} icon`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </footer>
  );
}
