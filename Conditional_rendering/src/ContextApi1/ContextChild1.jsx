import React, { useContext } from 'react'
import myContext from './Context1'

const ContextChild1 = () => {
    let data= useContext(myContext)
  return (
    <div>
      <div>ContextChild2:{data}</div>
    </div>
  )
}

export default ContextChild1
