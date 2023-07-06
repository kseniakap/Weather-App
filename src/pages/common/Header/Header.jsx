import React from 'react'
import Select from 'react-select'

import Logo from './../../../assets/icons/header/logo.svg';
import ChangeTheme from './../../../assets/icons/header/change_theme.svg';

import st from './Header.module.scss'

const Header = ({Change, theme}) => {
    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Нью-Йорк' },
        { value: 'city-3', label: 'Сеул' },
    ]
    const selectStyle = {
        control:(styles)=>({
            ...styles,
            background:theme === "dark" ? "#4F4F4F": "rgba(71, 147, 255, 0.20)",
            with:"194px",
            height: "37px",
            border: "none",
            borderRadius:'10px',
            fontSize: "16px",
            color: "black",
            fontWeight: "500"
        })
    }
   return (
    <div className={st.header}>
      <div className={st.wrapper}>
        <div className={st.img}>
            <img src={Logo} alt="logo" />
        </div>
        <div className={st.text}>Weather</div>
      </div>
      <div className={st.wrapper}>
        <div className={st.change_theme} onClick={Change}>
            <img src={ChangeTheme} alt="change theme" />
        </div>
        <div className={st.choice_city}>
        <Select styles={selectStyle} options={options} defaultValue={options[0].label} />
        </div>
      </div>
    </div>
  )
}

export default Header
