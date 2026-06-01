import React from 'react'
import PropsDrillChild from './PropsDrillChild'

const PropsDrillParent = () => {
    let obj=[
        {
        id:1,
        name:"A"
    },
    {
        id:2,
        name:"B"
    },
    {
        id:1,
        name:"c"
    },
    {
        id:1,
        name:"D"
    },
]
  return (
    <div>
        
       <PropsDrillChild obj={obj}/>
      
    </div>
  )
}

export default PropsDrillParent
