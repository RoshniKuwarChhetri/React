import React, { useReducer } from 'react'

let initialData={
    count:0
}

function reducer(val,action){
   // console.log(val.count)
  // console.log(action.type)
if(action.type==="Increment"){
    return {count : val.count+1}
}
// else if(action.type==="Decrement"){
//     return{count : val.count-1}
// }
// else{
//     return{count: val.count=0}
// }
}
const UseReducer = () => {
    let [state,setState]=useReducer(reducer, initialData)
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={()=>setState({type:"Increment"})}>Increment</button>
      {/* <button onClick={()=>setState({type:"Decrement"})}>Decrease</button>
      <button onClick={()=>setState({type:"Reset"})}>Reset</button> */}
    </div>
  )
}

export default UseReducer
