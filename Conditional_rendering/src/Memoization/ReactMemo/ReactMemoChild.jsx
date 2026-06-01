import React from 'react'

const ReactMemoChild = () => {
  return (
    <div>
        {console.log("Component is rendered")}
      <h1>Child rerender</h1>
    </div>
  )
}

export default React.memo (ReactMemoChild)
