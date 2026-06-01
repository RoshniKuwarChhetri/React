import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Pages/layout/Layout'
import Home from '../Pages/Home/Home'
import Login from '../Pages/login/Login'
import Signup from '../Pages/signup/Signup'
import Cart from '../Pages/cart/Cart'
import EditProfile from '../Pages/editProfile/EditProfile'
import AllProduct from '../Pages/allproduct/AllProduct'
import NotFound from '../Pages/NotFound/NotFound'

const Routing = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>, 
    children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/login",
            element:<Login/>
        },
        {
            path: "/signup",
            element:<Signup/>
        },
        {
            path: "/cart",
            element:<Cart/>
        },
        {
            path: "/allproduct",
            element:<AllProduct/>
        },
        {
            path: "/editProfile",
            element:<EditProfile/>
        },
        {
            path: "/*",
            element:<NotFound/>
        }
    ]
  }
])

export default Routing
