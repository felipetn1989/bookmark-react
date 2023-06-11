import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Bookmarking from "./Bookmarking";
import Searching from "./Searching";
import Sharing from "./Sharing";

export default function Features() {
  return (
    <div>
      <h2>Features</h2>

      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <Router>
        <ul>
          <li>
            <Link to="/">Simple Bookmarking</Link>
          </li>
          <li>
            <Link to="/searching">Speedy Searching</Link>
          </li>
          <li>
            <Link to="/sharing">Easy Sharing</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Bookmarking />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/sharing" element={<Sharing />} />
        </Routes>
      </Router>
    </div>
  );
}
