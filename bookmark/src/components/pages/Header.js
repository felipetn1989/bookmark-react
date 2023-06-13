import logo from "../images/logo-bookmark.svg";
import logoWhite from "../images/logo-bookmark-white-menu.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMenu(false);
    });
  }, []); // this part of the code will close the hamburger menu whenever I resize the screen, to avoid breaking the flow of the page

  return (
    <header
      className={`relative px-8 py-10 w-full ${
        showMenu ? "pt-[3.1875rem] pb-[3.375rem]" : ""
      } lg:flex lg:justify-between`}
    >
      <div className={`flex justify-between items-center`}>
        <img
          className={`${showMenu ? "fixed" : ""} z-20`}
          src={showMenu ? logoWhite : logo}
          alt="Bookmark logo"
        />
        <button
          className={`${
            showMenu ? "fixed right-8" : ""
          } z-20 hover:cursor-pointer  lg:hidden`}
          onClick={toggleMenu}
        >
          <img src={!showMenu ? hamburger : close} alt="Menu Icon" />
        </button>
      </div>
      {showMenu && (
        <div className="bg-[#252b46dd] w-full lg:hidden">
          <ul className="z-10 fixed top-0 left-0 px-8 pt-[6.5625rem] w-full h-[100vh] text-center text-white tracking-[0.1875rem] bg-[#252b46dd] font-medium">
            <li className="border-t border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">
              Features
            </li>
            <li className="border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">
              Pricing
            </li>
            <li className="border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">
              Contact
            </li>
            <li className="border border-white rounded-md mt-7 py-2 text-xl">
              <button className="uppercase tracking-widest">Login</button>
            </li>
          </ul>
        </div>
      )}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-8 text-center text-[#252b46] tracking-[0.1875rem]">
          <li className="uppercase text-sm hover:cursor-pointer">Features</li>
          <li className="uppercase text-sm hover:cursor-pointer">Pricing</li>
          <li className="uppercase text-sm hover:cursor-pointer">Contact</li>
          <li className="border border-[#fa5757] bg-[#fa5757] text-white rounded-md py-1 px-4 text-sm">
            <button className="uppercase tracking-widest">Login</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
