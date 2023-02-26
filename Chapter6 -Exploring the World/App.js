import  ReactDOM from "react-dom/client"

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout"
import About from "./Pages/About"
import Home from "./Pages/Home"



const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
    </Route>


    </>
    
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
