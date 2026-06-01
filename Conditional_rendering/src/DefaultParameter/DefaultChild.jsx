import React from 'react'

const DefaultChild = ({data="default parameter"}) => {
  return (
    <div>
      <h1>DefaultChild prop : {data}</h1>

    </div>
  )
}

export default DefaultChild

// context api - use forvaccessing the data without without passing the passing the props again and  again we can directly share the data to the middle component...is a react feature that allows us to share the data globally between component without using props drilling
//STEPS TO USE  IT_1. create context
// 2. context provider 
// 3.useContext