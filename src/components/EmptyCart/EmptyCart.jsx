import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'

const EmptyCart = () => {
  return (
    <div className='emptyContainer'>
            <i className="fa-solid fa-face-sad-tear"></i>
            <p>There is nothing in your cart, <br/> click <Link to='/' className='link'>here</Link> to continue shopping.</p>
    </div>
    
  )
}

export default EmptyCart