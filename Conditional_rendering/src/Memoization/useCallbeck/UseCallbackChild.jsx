import React from 'react'

const UseCallbackChild = () => {
    console.log("Compont callback")
  return (
    <div>
       
      <h1>UseCallbackChld</h1>
    </div>
  )
}

export default React.memo(UseCallbackChild)
