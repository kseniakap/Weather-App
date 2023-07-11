import React from "react";
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

const api = {
  key: "6f9e1953d99aeb23b9f02c854507977c",
  base: "http://api.openweathermap.org/data/2.5/",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      theme: localStorage.getItem("theme") || "light",
      data: {},
      city: "",
      items: [],
    };
  }
  componentDidMount() {
    this.getInfoWeather();
    this.setThemeAttribute();
  }

  getInfoWeather = async (e) => {
    if (e && e.key === "Enter") {
      fetch(
        `${api.base}weather?q=${this.state.city}&units=metric&appid=${api.key}&lang=ru`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({ data: result });
          this.setState({ city: "" });
          const { main, wind, weather } = result;

          let pressureStatus =
            main.pressure < 760
              ? "низкое"
              : main.pressure === 760
              ? "нормальное"
              : "высокое";

          let windStatus =
            wind.speed === 0
              ? "безветрие"
              : wind.speed > 0 && wind.speed <= 5
              ? "слабый ветер"
              : wind.speed > 5 && wind.speed <= 10
              ? "умеренный ветер"
              : wind.speed > 10 && wind.speed <= 18
              ? "сильный ветер"
              : wind.speed > 18 && wind.speed <= 30
              ? "шторм"
              : "ураган";

          this.setState({
            data: result,
            items: [
              {
                icon: temp,
                name: "Температура",
                value: `${Math.round(
                  result.main.temp
                )}° - ощущается как ${Math.round(main.feels_like)}°`,
              },
              {
                icon: pressure,
                name: "Давление",
                value: `${main.pressure} мм ртутного столба - ${pressureStatus} давление`,
              },
              {
                icon: prec,
                name: "Осадки",
                value: `${weather[0].description}`,
              },
              {
                icon: wind,
                name: "Ветер",
                value: `${wind.speed} м/с  ${this.getCardinalDirection(
                  wind.deg
                )} - ${windStatus}`,
              },
            ],
          });
          console.log(result);
        });
    }
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
  onChangeValueInput = (e) => {
    this.setState({ city: e.target.value });
  };

  getCardinalDirection = (deg) => {
    const directions = [
      "северный",
      "северо-восточный",
      "восточный",
      "юго-восточный",
      "южный",
      "юго-западный",
      "западный",
      "северо-западный",
    ];
    return directions[Math.round(deg / 45) % 8];
  };
  // getTime = () => {
  //   const d = new Date();
  //   const localTime = d.getTime();
  //   const localOffset = d.getTimezoneOffset() * 60000;
  //   const utc = localTime + localOffset;
  //   const atlanta = utc + 1000 * 32400;
  //   const nd = new Date(atlanta);
  //   console.log(nd);
  // };

  render() {
 
    const { openModal, theme, items } = this.state;
    return (
      <div className="main_container">
        {openModal && <Popup items={items} />}
        <div className="container">
          <Header
            theme={theme}
            Change={this.toggleTheme}
            onChangeValueInput={this.onChangeValueInput}
            valueInput={this.city}
            getInfoWeather={this.getInfoWeather}
          />
          <Routes>
            <Route
              path="/"
              element={<Home items={items} data={this.state.data} />}
            />
            <Route path="/statictics" element={<Statictics />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
