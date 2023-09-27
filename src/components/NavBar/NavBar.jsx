import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
      <i className="fa-solid fa-mug-hot"></i>
      <i className="fa-solid fa-mug-hot"></i>
      <i className="fa-solid fa-mug-hot"></i>
      <i className="fa-solid fa-mug-hot"></i>
      


      </div>
      
    <h1>Kiki's Tea House</h1>
    <ul className='navList' >
      <li className='navLink'><Link to='/'><i className="fa-solid fa-house"></i></Link></li>
      <li className='navLink'><Link to='/about'><i className="fa-solid fa-people-group"></i></Link> </li>
      <li className='navLink'><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
    </ul>
    </div>
  
  )
}

export default NavBar