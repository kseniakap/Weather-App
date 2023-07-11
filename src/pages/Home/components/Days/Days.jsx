import React from 'react'
import st from './Days.module.scss'
import Card from './Card';
import Tabs from './Tabs'

import sun from './../../../../assets/icons/small_rain.svg'
import smallRainSun from './../../../../assets/icons/small_rain_sun.svg'
import smallRain from './../../../../assets/icons/small_rain.svg'
import mainlyCloudy from './../../../../assets/icons/mainly_cloudy.svg'
import rain from './../../../../assets/icons/rain.svg'

const Days = () => {
    const days = [
        {
          day: 'Сегодня',
          day_info: '28 авг',
          icon: sun,
          temp_day: 12,
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Завтра',
          day_info: '29 авг',
          icon: smallRainSun,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Небольшой дождь и солнце',
        },
        {
          day: 'Ср',
          day_info: '30 авг',
          icon: smallRain,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Небольшой дождь',
        },
        {
          day: 'Чт',
          day_info: '28 авг',
          icon: mainlyCloudy,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Пт',
          day_info: '28 авг',
          icon: rain,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Сб',
          day_info: '28 авг',
          icon: sun,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
        {
          day: 'Вс',
          day_info: '28 авг',
          icon: sun,
          temp_day: '+18',
          temp_night: '+15',
          info: 'Облачно',
        },
      ];
  return (
    <>
      <Tabs/>
        <div className={st.days}>
        {
          days.map((day, i)=>(
              <Card key={i} item={day}/>
          ))
        }
        </div>
     </>
  )
}

export default Days
