import React from 'react';
import style from './Home.module.scss';
import Today from './Today/Today';
import TodayInfo from './TodayInfo/TodayInfo';

console.log(style); 
const Home = () => {
  return (
    <div className={style.home}>
      <Today/>
      <TodayInfo/>
    </div>
  )
}

export default Home
