import logo from "../images/logo-bookmark.svg";
import logoWhite from "../images/logo-bookmark-white-menu.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={`relative px-8 py-10 w-full ${showMenu ? "pt-[3.25rem] pb-[1.8125rem]" : ""} max-w-5xl m-auto`}>
      <div className={`flex justify-between items-center`}>
        <img
          className={`${showMenu ? "fixed" : ""} z-20`}
          src={showMenu ? logoWhite : logo}
          alt="Bookmark logo"
        />
        <button
          className={`${showMenu ? "fixed right-8" : ""} z-20 hover:cursor-pointer`}
          onClick={toggleMenu}
        >
          <img src={showMenu ? close : hamburger} alt="Menu Icon" />
        </button>
      </div>
      {showMenu && (
        <>
            <ul className="z-10 fixed top-0 left-0 px-8 pt-[6.5625rem] w-full h-[100vh] text-center text-white tracking-[0.1875rem] bg-[#252b46dd] font-medium max-w-5xl m-auto">
              <li className="border-t border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">
                Features
              </li>
              <li className="border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">Pricing</li>
              <li className="border-b border-white uppercase text-xl py-[1.125rem] hover:cursor-pointer">Contact</li>
              <li className="border border-white rounded-md mt-7 py-2 text-xl"><button className="uppercase tracking-widest">Login</button></li>
            </ul>
        </>
      )}
    </header>
  );
}
