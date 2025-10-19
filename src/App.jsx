import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 8 }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* fallback route to avoid blank page on unknown paths during dev */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
