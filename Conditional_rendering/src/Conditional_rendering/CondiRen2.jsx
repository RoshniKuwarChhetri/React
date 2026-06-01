import React from 'react'

const CondiRen2 = () => {
    let message=["Not1", "Not2", "Not3","Not 4"]

  return (
    <div> Notification
        {/* {
         message.length>1?<sup>{message.length}</sup>:""
        }
      */}
      {message.length>1 && <sup>{message.length}</sup>}
    </div>
  )
}

export default CondiRen2
