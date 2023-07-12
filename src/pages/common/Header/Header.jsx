import React from 'react'
// import Select from 'react-select'

import Logo from './../../../assets/icons/header/logo.svg';
import ChangeTheme from './../../../assets/icons/header/change_theme.svg';

import st from './Header.module.scss'

const Header = ({Change, theme, getInfoWeather, valueInput, onChangeValueInput}) => {
   return (
    <div className={st.header}>
      <div className={st.wrapper}>
        <div className={st.wrapper_logo}>
        <div className={st.img}>
            <img src={Logo} alt="logo" />
        </div>
        <div className={st.text}>Weather</div>
        </div>
        <div className={st.change_none} onClick={Change}>
            <img src={ChangeTheme} alt="change theme" />
        </div>
      </div>
      <div className={st.wrapper}>
        <div className={st.change_theme} onClick={Change}>
            <img src={ChangeTheme} alt="change theme" />
        </div>
        <div className={st.choice_city}>
        <input className={st.input}
            type="text"  placeholder="Введите название города..."
            onChange={onChangeValueInput}
            value={valueInput}
            onKeyDown={getInfoWeather}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
