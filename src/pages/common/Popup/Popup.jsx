import React from 'react'
import TodayItems from './../../Home/components/TodayInfo/TodayItems/TodayItems'
import st from'./Popup.module.scss'

import close from "./../../../assets/icons/close.svg"
import img from './../../../assets/icons/rain.svg'


const Popup = ({items}) => {
  return (
  <>
  <div className={st.blur}>
  <div className={st.popup}>
      <div className={st.wrapper}>
        <div className={st.info}>
            <div className={st.temp}>18°</div>
            <div className={st.day}>Среда</div>
            <div className={st.img}>
                <img src={img} alt="img" />
            </div>
            <div className={st.time}>
                Время: <span>18:34</span>
            </div>
            <div className={st.city}>
                Город: <span>Санкт-Петербург</span> 
            </div>
        </div>
        <div className={st.items}>
        {
            items.map((item, i) => (
            <TodayItems key={i} item = {item}/>
            ))
        }
        </div>
        <div className={st.close}>
            <img src={close} alt="close" />
        </div>
      </div>
  </div>
  </div>
  </>
  )
}

export default Popup
