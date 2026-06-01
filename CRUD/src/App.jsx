import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import Home from './Home'

const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
