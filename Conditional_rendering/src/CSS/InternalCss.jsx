import React from 'react'

const InternalCss = () => {

  return (
    <div>
      <style>
        {
            `
            .internal{
                  background-color:black;
                  color:purple;
                  border: 2px solid purple;
            }
            
            `
        }
      </style>

      <h1 className="internal"> Internalcss</h1>
    </div>
  )
}

export default InternalCss



