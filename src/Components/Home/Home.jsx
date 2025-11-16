import React from 'react'
import './Home.css'
import { ReactTyped } from "react-typed";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>Welcome to <span className='highlight'><ReactTyped strings={['Productivity', 'Effectiveness', 'Innovation', 'SuprNova.']} startDelay={1000} typeSpeed={100} backSpeed={50}></ReactTyped></span></h2>
        <p>Reach for the stars.</p>
        <AnchorLink href='#contact'><button className="contact_btn">Contact Us</button></AnchorLink>
      </div>
      <div className="shooting-star shooting-star-1">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-2">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-3">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-4">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-5">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-6">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
      <div className="shooting-star shooting-star-7">
        <div className="star-head"></div>
        <div className="star-tail"></div>
      </div>
    </section>
  )
}

export default Home

