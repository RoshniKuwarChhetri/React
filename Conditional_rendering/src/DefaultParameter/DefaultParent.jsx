import React from 'react'
import DefaultChild from './DefaultChild'

const DefaultParent = () => {
  return (
    <div>
     let data="data from parent"
      <DefaultChild data={data}/>
      <DefaultChild />
    </div>
  )
}

export default DefaultParent
//default props are the predefined values which is assigned to the componebnt props that are used when no value is passed from parent component