import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Footer from "./components/pages/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
