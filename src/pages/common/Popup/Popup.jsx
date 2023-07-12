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
        Введите правильно название города
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
