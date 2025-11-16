import React, { useState } from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d5de3b8f-c2da-48e9-bbdf-47d2cbd69541");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      Swal.fire({
        title: "Submitted Successfully",
        text: "We will respond to you as soon as possible.",
        icon: "success",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oh no! Something went wrong",
        text: "error: " + data.message,
        icon: "error",
      });
      setResult("Error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <form onSubmit={onSubmit}>
        <h2>Contact Us</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' name='name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" className="field" placeholder='Enter your email' name='email' required/>
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" className='field message' placeholder='What do you want to say?...' required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
