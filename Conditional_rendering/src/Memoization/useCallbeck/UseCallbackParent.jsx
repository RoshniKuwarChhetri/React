import React, { useState, useCallback } from 'react'
import UseCallbackChild from './UseCallbackChild'

const UseCallbackParent = () => {
    let [count , setCount] = useState(0)

    const expensiveFn = useCallback(() => {
        console.log("Function is called")
    }, [])

  return (
    <div>
      <h1>UseCallbackParent: {count}</h1>

      <button onClick={()=>setCount(count+1)}>Click</button>

      <UseCallbackChild expensiveFn={expensiveFn}/>
    </div>
  )
}

export default UseCallbackParent