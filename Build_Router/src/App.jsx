import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>

      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="*" element={<PageNotFound/>}/>
</Routes>
    </BrowserRouter>
  )
}



export default App
