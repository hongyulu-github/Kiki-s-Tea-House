import React from 'react'
import styles from './Home.module.css'
import {products} from '../../service/products'

const Home = (Props) => {
  
  return (
    <div className={styles.homeContainer}>
      
    {products.map(product => 
      <div className={styles.card} key={product.id} onClick={() => Props.onAdd(product.id)}>
      <div className={styles.image}>
        <img src={product.imageUrl} />
        
      </div>
        <span className={styles.title}>{Props.Cart[product.id]>0?product.name + '(' + Props.Cart[product.id] + ')' : product.name}</span>
        <span className={styles.price}>{product.price + "$/g"}</span>
        
      </div>
      )}
    </div>
  )
}

export default Home