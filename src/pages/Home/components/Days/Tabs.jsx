import React from 'react'
import st from './Days.module.scss'

const Tabs = () => {
  const tabs = [
    {
      text:"На неделю"
    },
    {
      text:"На 10 дней"
    },
    {
      text:"На конец года"
    },
  ] 
  return (
    <div className={st.tabs}>
      <div className={st.wrapper}>
      {
        tabs.map((tab, i) => (
         <div className={st.tab} key={i}>
            {tab.text}
         </div>
        ))
      }
      </div>
      <div className={st.tab + ' ' + st.cancel}>Отменить</div>
    </div>
  )
}

export default Tabs
