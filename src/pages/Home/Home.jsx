import React from 'react'
import './Home.css'
import {products} from '../../service/products'

const Home = () => {
  return (
    <div className='homeContainer'>
    {products.map(product => 
      <div className="card" key={product.id}>
      <div className="image">
        <img src={product.imageUrl} />
        
      </div>
        <span className="title">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      )}
    </div>
  )
}

export default Home