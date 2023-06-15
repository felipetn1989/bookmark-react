import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Bookmarking from "./Bookmarking";
import Searching from "./Searching";
import Sharing from "./Sharing";

export default function Features() {
  const [activeLink, setActiveLink] = useState("/bookmark-react/");

  function handleLinkClick(e) {
    setActiveLink(e.target.pathname);
  }

  return (
    <Router>
      <div className="grid gap-3 px-8 mt-[8.5rem] max-w-5xl m-auto">
        <h2 className="text-2xl font-medium tracking-wide">Features</h2>

        <p className="text-[#9194a1]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <ul className="border-t border-b mt-7 tracking-wider">
          <li className="relative border-b pb-[0.875rem] pt-4 hover:text-[#fa5757]">
            <Link to="bookmark-react/" onClick={handleLinkClick}>
              Simple Bookmarking
            </Link>
            <div
              className={`decoration translate-y-3.5 m-auto w-[8.75rem] h-1 bg-[#fa5757] ${
                activeLink === "/bookmark-react/" ? "" : "invisible"
              }`}
            ></div>
          </li>
          <li className="relative border-b pb-[0.875rem] pt-4 hover:text-[#fa5757]">
            <Link to="bookmark-react/searching" onClick={handleLinkClick}>
              Speedy Searching
            </Link>
            <div
              className={`decoration translate-y-3.5 m-auto w-[8.75rem] h-1 bg-[#fa5757] ${
                activeLink === "/bookmark-react/searching" ? "" : "invisible"
              }`}
            ></div>
          </li>
          <li className="relative pb-[0.875rem] pt-4 hover:text-[#fa5757]">
            <Link to="bookmark-react/sharing" onClick={handleLinkClick}>
              Easy Sharing
            </Link>
            <div
              className={`decoration translate-y-3.5 m-auto w-[8.75rem] h-1 bg-[#fa5757] ${
                activeLink === "/bookmark-react/sharing" ? "" : "invisible"
              }`}
            ></div>
          </li>
        </ul>

        <Routes>
          <Route path="bookmark-react/" element={<Bookmarking />} />
          <Route path="bookmark-react/searching" element={<Searching />} />
          <Route path="bookmark-react/sharing" element={<Sharing />} />
        </Routes>
      </div>
    </Router>
  );
}
