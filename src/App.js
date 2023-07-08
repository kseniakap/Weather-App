import React, {useEffect}from "react";
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

const API_KEY = "6f9e1953d99aeb23b9f02c854507977c";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      theme: localStorage.getItem("theme") || "light",
      lat:[],
      long:[],
      items: [
        { icon: temp, name: "Температура", value: "20° - ощущается как 17°" },
        {
          icon: pressure,
          name: "Давление",
          value: "765 мм ртутного столба - нормальное",
        },
        { icon: prec, name: "Осадки", value: "Без осадков" },
        { icon: wind, name: "Ветер", value: "3 м/с юго-запад - легкий ветер" },
      ],
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
        () => {
          this.getInfoWeather();
        }
      );
    });

    this.setThemeAttribute();
  }

  getInfoWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${API_KEY}`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch, status ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  };


  toggleModal = () => {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      this.setThemeAttribute();
    }
  }
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  setThemeAttribute = () => {
    const { theme } = this.state;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  render() {
    const { openModal, theme, items, valueInput } = this.state;
    console.log(valueInput);
    return (
      <div className="main_container">
        {openModal && <Popup items={items} />}
        <div className="container">
          <Header
            theme={theme}
            Change={this.toggleTheme}
         
          />
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/statictics" element={<Statictics />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
