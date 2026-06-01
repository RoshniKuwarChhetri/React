import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import NotFound from '../Pages/NotFound';

// const Router=createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Layout/>}>
//             <Route path='/' element={<Home/>}/>
//              <Route path='/about' element={<About/>}/>
//              <Route path='/contact' element={<Contact/>}/>
//              <Route path='/service' element={<Service/>}/>
//         </Route>
        
//     )
// )
const Router=createBrowserRouter([
       {
        path:"/",
        element:<Layout/>,
        children:[
        {    path:"/",
            element:<Home/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
           path:"/about",
            element:<About/>
        },
        {
           path:"/service",
            element:<Service/>
        },
        {
           path:"/*",
            element:<NotFound/>
        }
    ]
}
])


export default Router