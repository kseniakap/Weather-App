import React from 'react';
import st from './Home.module.scss';
import Today from './Today/Today';
import TodayInfo from './TodayInfo/TodayInfo';
import Days from './Days/Days'

const Home = ({items, data, }) => {
  
  return (
    <>
    <div className={st.home} >
      <div className={st.wrapper}>
        <Today data={data} />
        <TodayInfo items={items}/>
      </div>
        {/* <Days data={data}/> */}
    </div>
    </>
  )
}

export default Home
