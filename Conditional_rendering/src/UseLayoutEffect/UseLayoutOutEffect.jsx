import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutOutEffect = () => {
    let [state,setState]=useState("js")
    useLayoutEffect(()=>{
     setState("reactjs")
    },[])
  return (
    <div>
      <h1>{state}</h1>
    </div>
  )
}

export default UseLayoutOutEffect
