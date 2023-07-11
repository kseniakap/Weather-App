import React from 'react'
import st from './TodayItems.module.scss';

const TodayItems = ({item}) => {
 const {icon, name, value} = item;

  return (
    <div className={st.todayItems}>
        <div className={st.todayItems__wrapper }>
            <div className={st.todayItems__icon}>
                <img src={icon} alt={name} />
            </div>
            <div className={st.todayItems__name}>{name}</div>
            <div className={st.todayItems__value}>{value}</div>
        </div>
    </div>
  )
}

export default TodayItems
