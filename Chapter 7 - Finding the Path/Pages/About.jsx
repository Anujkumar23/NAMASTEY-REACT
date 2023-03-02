import React from 'react'
import food from "../Images/burger-image.png"

function About() {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <h1>Welcome to <br/>
          The world of <br/> <span>Tasty & Fresh Food</span></h1>
        <h4>"Better you will feel if you eat a Hot<span>Spot</span> fresh meal"</h4>

   
      </div>
      <div className='about-right'>
        <img src={food} alt="burger-img" />

      </div>
    </div>
  )
}

export default About