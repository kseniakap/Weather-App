import React from 'react'
import error from "./error.gif"
import st from "./Error.module.scss"
const ErrorMessage = () => {
  return (
  <>
    <img className={st.errorImg} src={error} alt="error"  />
    <div className={st.descr}>Вы ввели неправильно название города...</div>
  </>
  )
}

export default ErrorMessage
