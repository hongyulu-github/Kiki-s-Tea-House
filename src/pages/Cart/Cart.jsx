import React from 'react'
import styles from './Cart.module.css'
import { products } from '../../service/products'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import Total from '../../components/Total/Total'


const Cart = ({Cart,onAdd,onRemove}) => {

  const getTotal =()=> {
     let total = 0;
     for (const item in Cart){
      if (Cart[item] > 0){
        let itemInfo = products.find((product) => product.id === Number(item))
        total += Cart[item] * itemInfo.price
      }
     }
     return total.toFixed(2)
  }
 
  if (Object.values(Cart).every((ele) => ele === 0 )) return <EmptyCart/>
  
  else return (
   
       <div className={styles.cartContainer}>
        <section>
           {products.map(product =>{
      if (Cart[product.id] > 0)
      return (
        <div className={styles.card} key={product.id}>
          <i className="fa-regular fa-square-minus" onClick={() => onRemove(product.id)}></i>
        <div className={styles.image}>
          <img src={product.imageUrl} />
          
        </div>
          <span className={styles.title}>{Cart[product.id]>0?product.name + '(' + Cart[product.id] + ')' : product.name}</span>
          <span className={styles.price}>{" $ " + (product.price * Cart[product.id]).toFixed(2)}</span>
          <i className="fa-regular fa-square-plus" onClick={() => onAdd(product.id)}></i>
        </div>
        )
    }
      )}
        </section>
   
        <Total total={getTotal()}/>
    </div>
    
   
 


  )
}

export default Cart