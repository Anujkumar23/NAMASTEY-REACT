import React, { useState } from 'react'
import contactImg from "../Images/Contact-Us.png"

function Contact() {
  const [message,setMessage]=useState(false)


  const handleSubmit=(e)=>{
      e.preventDefault();
      setMessage(true)
      



  }



  return (
    <div className='contact-container'>
      <div className='contact-left'>
        <img src={contactImg} alt="contact-img" />
      </div>
      <div className='contact-right'>
        <h1>Contact</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Full name' name='name' id="name" required />
          <input type="email" placeholder=' Enter email' name='email' id='email' required />
          <textarea name="textarea" id="textarea" cols="5" rows="5" placeholder='Enter message' required/>
          <button type='submit'>Submit</button>
        </form>
       { message && <h1>Thanks for contacting us</h1>}
      </div>

    </div>
  )
}

export default Contact