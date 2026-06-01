import React from 'react'

const InlineCss = () => {
    let inline2={
        color:"purple",
        backgroundColor:"black"
    }
  return (
    <div>
      <h1 style={{color:"pink", backgroundColor:"black"}}>InlineCss</h1>
      <h1 style={inline2}>InlineCss2</h1>
    </div>
  )
}

export default InlineCss

