import React, { useReducer } from 'react'

let initialData={
    darkMode: false
}
function reducer(val, action){
    if(action.type==="ToggleTheme"){
        return {...val, darkMode: !val.darkMode}
    }else{
        return val
    }
}

const UseRedcer3 = () => {
    let [state,setState]= useReducer(reducer,initialData)
    let styles={
        backgroundColor: state.darkMode ? "red" : "black",
        color: state.darkMode ? "black" : "red",
        height:"100vh"
    }
  return (
    <div style={styles}>
        <h1>{state.darkMode ? "darkmode" : "Lightmode"}</h1>
        <button onClick={()=>setState({type:"ToggleTheme"})}>Change Theme</button>
    </div>
  )
}

export default UseRedcer3
