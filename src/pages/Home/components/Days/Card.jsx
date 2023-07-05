import React from 'react'
import st from './Days.module.scss'

const Card = ({item}) => {
  const {day, day_info, icon, temp_day, temp_night, info} = item;
  return (
    <div className={st.card}>
      <div className={st.day}>
        {day}
      </div>
      <div className={st.info}>
      {day_info}
      </div>
      <img className={st.img} src={icon} alt={day_info} />
      <div className={st.temp}>
      {temp_day}
      </div>
      <div className={st.night}>
      {temp_night}
      </div>
      <div className={st.info}>
      {info}
      </div>
      
    </div>
  )
}

export default Card
