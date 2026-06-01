
import React, { useState } from 'react'
import ReactMemoChild from '../ReactMemoChild'

const ReactMemoParent = () => {

    let [count, setCount] = useState(0)

  return (
    <div>
        <h1> ReactMemoParent : {count} </h1>
        <button onClick={()=>setCount(count++)}> CLICK </button>
        <ReactMemoChild/>
    </div>
  )
}

export default ReactMemoParent