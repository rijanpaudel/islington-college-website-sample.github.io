import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/islington-logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
  // When scroll event happens, and in screen if scroll axis becomes greater than 50 make the setSticky true if not make it false
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  
  return (
    // If sticky is true add dar-nav class else in false condtion there will be no class
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
