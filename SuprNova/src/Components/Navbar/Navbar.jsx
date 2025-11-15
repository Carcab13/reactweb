import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <AnchorLink href="#home" offset="80">
            SuprNova
          </AnchorLink>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <AnchorLink href="#home" offset="80" className="navbar-link">
              Home
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink href="#about" offset="80" className="navbar-link">
              About
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink href="#projects" offset="80" className="navbar-link">
              Projects
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink href="#contact" offset="80" className="navbar-link">
              Contact
            </AnchorLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <ul className={`navbar-menu-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item-mobile">
            <AnchorLink
              href="#home"
              offset="80"
              className="navbar-link-mobile"
              onClick={closeMobileMenu}
            >
              Home
            </AnchorLink>
          </li>
          <li className="navbar-item-mobile">
            <AnchorLink
              href="#about"
              offset="80"
              className="navbar-link-mobile"
              onClick={closeMobileMenu}
            >
              About
            </AnchorLink>
          </li>
          <li className="navbar-item-mobile">
            <AnchorLink
              href="#projects"
              offset="80"
              className="navbar-link-mobile"
              onClick={closeMobileMenu}
            >
              Projects
            </AnchorLink>
          </li>
          <li className="navbar-item-mobile">
            <AnchorLink
              href="#contact"
              offset="80"
              className="navbar-link-mobile"
              onClick={closeMobileMenu}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

