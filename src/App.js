import React, { useLayoutEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/components/Home";
import Statictics from "./pages/Statistics/components/Statictics";
import Header from "./pages/common/Header/Header";
import Popup from "./pages/common/Popup/Popup";

import "./styles/style.scss";

import temp from "./assets/icons/temp.svg";
import pressure from "./assets/icons/pressure.svg";
import prec from "./assets/icons/prec.svg";
import wind from "./assets/icons/wind.svg";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [theme, setTheme] = useState("light");

  const items = [
    { icon: temp, name: "Температура", value: "20° - ощущается как 17°" },
    {
      icon: pressure,
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    { icon: prec, name: "Осадки", value: "Без осадков" },
    { icon: wind, name: "Ветер", value: "3 м/с юго-запад - легкий ветер" },
  ];

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const Change = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="main_container">
      {openModal && <Popup items={items} />}
      <div className="container">
        <Header theme={theme} Change={Change} />
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/statictics" element={<Statictics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
