import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className='navBar'>
      <li className='navLink'><a href="/"><i className="fa-solid fa-house"></i></a></li>
      <li className='navLink'><a href="#about"><i className="fa-solid fa-people-group"></i> </a></li>
      <li className='navLink'><a href="#cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
    </ul>
  )
}

export default NavBar