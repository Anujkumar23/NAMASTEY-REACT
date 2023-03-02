import  ReactDOM from "react-dom/client"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout"
import About from "./Pages/About"
import Cart from "./Pages/Cart"
import Contact from "./Pages/Contact"
import Error from "./Pages/Error"
import Home from "./Pages/Home"
import Login from "./Pages/Login"



const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>} errorElement={<Error/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    
    </Route>
    <Route path="/login" element={<Login/>}/>


    </>
    
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
