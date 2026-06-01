import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element ={Home}></Route>
        <Route path='/create' element={Create}></Route>
        <Route path='/read/:id' element={Read}></Route>
        <Route path='/update/:id' element={Update}></Route>
        <Route path='/*' element={N}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Home
