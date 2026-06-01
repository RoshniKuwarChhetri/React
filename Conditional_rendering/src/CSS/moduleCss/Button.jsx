import React from 'react'
import style from './Button.module.css'
const Button = () => {
  return (
    <div>
      <button className={style.btn}>Click me</button>
      <br />
      <br />
      <input className={style.btn}type="text" />
    </div>
  )
}

export default Button
