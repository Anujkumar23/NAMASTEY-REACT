import  ReactDOM from "react-dom/client"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Chapter 7 - Finding the Path/Component/Layout"
import About from "./Chapter 7 - Finding the Path/Pages/About"
import Cart from "./Chapter 7 - Finding the Path/Pages/Cart"

import Contact from "./Chapter 7 - Finding the Path/Pages/Contact"
import Error from "./Chapter 7 - Finding the Path/Pages/Error"
import Home from "./Chapter 7 - Finding the Path/Pages/Home"
import Login from "./Chapter 7 - Finding the Path/Pages/Login"
import RestaurantMenu from "./Chapter 7 - Finding the Path/Pages/RestaurantMenu"




const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>} errorElement={<Error/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/restaurant/:resId" element={<RestaurantMenu/>}/>
    
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
