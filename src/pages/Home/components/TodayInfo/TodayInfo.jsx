import React from 'react'
import TodayItems from './TodayItems/TodayItems'
import st from './TodayInfo.module.scss';

import cloud from './../../../../assets/icons/cloud.png'

const ThisDayInfo = ({items}) => {
  
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
