import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Images/logo.png";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="app logo" />
    </a>
  );
};

function Header() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
          <li>
            <span class="material-symbols-rounded">shopping_cart</span>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setisLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setisLoggedIn(true)}>
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
