import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Statictics from "./pages/Statistics/components/Statictics";
import Header from "./pages/common/Header/Header";

import "./styles/style.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statictics" element={<Statictics />} />
      </Routes>
    </div>
  );
}

export default App;
