import React, { useContext } from 'react'

const Componentx = () => {
    let data1="data1"
    let data2="data2"
    let data3="data3"
  return (
    <div>
      <h1>ContextApi</h1>
      <Context1.Provider value={{data1 ,data2,data3}}>
          <Componentx/>
      </Context1.Provider>
    </div>
  )
}

export default Componentx
