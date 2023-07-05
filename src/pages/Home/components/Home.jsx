import React from 'react';
import st from './Home.module.scss';
import Today from './Today/Today';
import TodayInfo from './TodayInfo/TodayInfo';
import Days from './Days/Days'
import Popup from '../../common/Popup/Popup';



const Home = ({items}) => {
  
  return (
    <>
    <div className={st.home}>
      <div className={st.wrapper}>
        <Today/>
        <TodayInfo items={items}/>
      </div>
        <Days/>
    </div>
    </>
  )
}

export default Home
