import React, { useState } from 'react'

const CondiRen = () => {
    let[state, setState]=useState("vhgvjhb")
    if(state==="A"){
        return (
            <div>A</div>
        )

    } else if(state==="B")
    return(
      <div>B</div>
    )
    else{
      return(
        <div>"no content"</div>
      )
    }
  
}

export default CondiRen
