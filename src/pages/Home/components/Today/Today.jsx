import React from 'react';
import st from './Today.module.scss';

import sunImg from './../../../../assets/icons/weather/sun.svg';
import cloudImg from './../../../../assets/icons/weather/cloud.svg';
import smallRainImg from './../../../../assets/icons/weather/small_rain.svg';
import cloudWithSunImg from './../../../../assets/icons/weather/cloudwithsun.svg';
import rainImg from './../../../../assets/icons/weather/smallrain.svg';
import cloudyImg from './../../../../assets/icons/weather/cloudy.svg';
import Popup from '../../../common/Popup/Popup';

const Today = ({ data }) => {
  const { name, main } = data;
  let iconImg;
  if (Object.keys(data).length !== 0) {
    try {
      const descr = data.weather[0].description;
      iconImg =
        descr === "ясно"
          ? sunImg
          : descr === "пасмурно"
          ? cloudImg
          : descr === "небольшой проливной дождь"
          ? smallRainImg
          : descr === "облачно с прояснениями"
          ? cloudWithSunImg
          : descr === "небольшой дождь"
          ? rainImg
          : descr === "переменная облачность"
          ? cloudyImg
          : null;
    } catch (e) {      
    }
  }
  return (
    typeof data.main != "undefined" && (
      <div className={st.today}>
        <div className={st.today__top}>
          <div className={st.today__wrapper}>
            <div className={st.today__temp}>{Math.round(main.temp)}°c</div>
            <div className={st.today__day}>Сегодня</div>
          </div>
         { iconImg &&
          ( <img className={st.today__img} src={iconImg} alt="погода" />)
         }
        </div>
        <div className={st.today__bottom}>
          <div className={st.today__time}>
            Время: <span>21:54</span>
          </div>
          <div className={st.today__city}>
            Город: <span>{name}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default Today;