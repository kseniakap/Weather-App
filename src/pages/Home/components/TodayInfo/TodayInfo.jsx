import React from 'react'
import TodayItems from '../TodayItems/TodayItems'
import st from './TodayInfo.module.scss';

import cloud from './../../../../assets/icons/cloud.png'
import temp from './../../../../assets/icons/temp.svg'
import pressure from './../../../../assets/icons/pressure.svg'
import prec from './../../../../assets/icons/prec.svg'
import wind from './../../../../assets/icons/wind.svg'

const ThisDayInfo = () => {
  const items = [
    {icon:temp, name:"Температура", value:'20° - ощущается как 17°'},
    {icon:pressure, name:"Давление", value:'765 мм ртутного столба - нормальное'},
    {icon:prec, name:"Осадки", value:'Без осадков'},
    {icon:wind, name:"Ветер", value:'3 м/с юго-запад - легкий ветер'},
  ]
  return (
    <div className={st.todayInfo}>
      <div className={st.todayInfo__items}>
       {
         items.map((item, i) => (
          <TodayItems key={i} item = {item}/>
          ))
       }
      </div>
      <img className={st.todayInfo__img} src={cloud} alt="фон" />
      
    </div>
  )
}

export default ThisDayInfo
