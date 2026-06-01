import React from 'react'
import { RouterProvider} from 'react-router-dom'
import Routing from './routing/Routing'


const App = () => {
  return (
    <RouterProvider router={Routing}></RouterProvider>
  )
}

export default App
