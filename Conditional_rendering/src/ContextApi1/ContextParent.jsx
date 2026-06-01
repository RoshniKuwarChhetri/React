import React from 'react'
import ContextChild1 from './ContextChild1'

const ContextParent = () => {
    let data="global data"
  return (
    <div>
      <h1>ContextParent</h1>
      <myContext.Provider value={data}>
<ContextChild1/>
      </myContext.Provider>
    </div>
  )
}

export default ContextParent

