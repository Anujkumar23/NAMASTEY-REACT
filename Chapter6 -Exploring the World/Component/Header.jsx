import React from "react"
import { Link } from "react-router-dom"
import logo from "../Images/logo.png"



const Title=()=>{
    return(
        <a href="/">
            <img className="logo" src={logo}  alt="app logo" />
        </a>
    )
}


function Header() {
  return (
    <header className="header" >
      
      <Title/>

  <div className="nav-items">
      <ul>
          <li>Home</li>
         <li><Link to="/about">About</Link></li>
          <li>Contact</li>
          <li><span class="material-symbols-rounded">
shopping_cart
</span></li>

      </ul>
  </div>
</header>
  )
}

export default Header