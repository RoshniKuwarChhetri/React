import React, { useState } from 'react'


const CondiRen3 = () => {
    let [state, setState] =useState("country")
    switch(state){
        case "Home":
            return( 
                <div>Home</div>
            )
        case "Help":
            return(
                <div>Help</div>
            )
        case "Query":
            return(
                <div>Query</div>
            )
            
    }
  return (
    <div>
      
    </div>
  )
}

export default CondiRen3
