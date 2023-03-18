import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Images/logo.png";
import { useNavigate } from "react-router-dom";

const Title = () => {

  return (
    <a href="/">
      <img className="logo" src={logo} alt="app logo" />
    </a>
  );
};

function Header() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
const navigate =useNavigate();
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li> <Link to="/contact">Contact</Link></li>
          <li>
            <span onClick={()=>{navigate("/cart")}} className="material-symbols-rounded">shopping_cart</span>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => {
                  setisLoggedIn((prevState)=>!prevState)
                
                }
                }
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => {setisLoggedIn(true)
                navigate('/login')}
                }>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
