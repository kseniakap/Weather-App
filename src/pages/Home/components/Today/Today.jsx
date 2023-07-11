import React from 'react'
import st from './Today.module.scss'

import iconImg from './../../../../assets/icons/sun.svg'

const Today = ({data}) => {
 const{name, main} = data;
  return (
    typeof data.main != 'undefined') && (<div className={st.today}>
    <div className={st.today__top}>
      <div className={st.today__wrapper}>
      <div className={st.today__temp}>{Math.round(main.temp)}°c</div>
      <div className={st.today__day}>Сегодня</div>
      </div>
      <img src={iconImg} alt="погода" />
    </div>
    <div className={st.today__bottom}>
      <div className={st.today__time}>Время: <span>21:54</span></div>
      <div className={st.today__city}>Город: <span>{name}</span></div>
    </div>
  </div>)      
  
}

export default Today
