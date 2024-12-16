import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Blogs from "./pages/blogs";

function App() {


 

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
