// import React, { useEffect, useSyncExternalStore } from 'react'
// import { useState } from 'react'
import FeatchData from './assets/ApiTask2/FeatchData'
import ParentApi from './assets/DrillAssignment/ApiTask/ParentApi'
import PropsDrillParent from './assets/DrillAssignment/PropsDrillParent'

const App = () => {

  // let [count,setCount]=useState(0)
  // let[count2, setCount2]=useState(100)
  // function inc(){
  //   setCount(count+1)
  // }
  // function dec(){
  //   setCount2(count2-1)
  // }
  // useEffect( function (){
  //   console.log("happening")
  // },[count])
  return (
    <div>
      {/* <h1>count is inc {count}</h1>
      <h2>count is dec{count2}</h2>
      <button onMouseEnter={inc}>Increase</button>
      <button onMouseLeave={dec}>dec</button>
      <h1>APP</h1> */}
      {/* <PropsDrillParent/> */}
      {/* <ParentApi/> */}
      <FeatchData/>
    </div>
  )
}

export default App
