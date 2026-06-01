import React, { useContext } from 'react'
import { myContext2 } from './ContextApi2Parent'

const ContextApi2Child2 = () => {
    let data=useContext(myContext2)
  return (
    <div>
      <div>ContextAp12 : {data}</div>
    </div>
  )
}

export default ContextApi2Child2
