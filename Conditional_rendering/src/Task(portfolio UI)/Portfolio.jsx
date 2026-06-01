import React, { useState } from 'react'
import './style.css'
const Portfolio = () => {
    
    let [theme, setTheme]= useState("dark")
 function dark() {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    
  return (
    <div>
    
      <div className={`container ${theme}`}>
        
        <div className="text">
            <div className="john"><h2>John</h2></div>
            <div className="title">
            <div className="title1">I'am John Dao</div>
            <div className="title2">I code cool website</div>
            <div className="para"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorem omnis aut fugiat nobis cupiditate incidunt, neque sequi inventore,</p></div>
            <div className="btn">
                <button className="btn1">My Portfolio</button>
                <button className="btn2">Contact me</button>
            </div>
            </div>
        </div>
        <div className="image"></div>
        <div className="toggle" onClick={dark}>
            <div className="circle">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
