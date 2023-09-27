import React from 'react'
import styles from './Total.module.css'

const Total = (Props) => {
  return (
    <div className={styles.card}>
   <a className={styles.card1} href="#">
    <p>{'$' + Props.total}</p>
    <p className={styles.small}>Click to check out!</p>
    <div className={styles.goCorner} href="#">
      <div className={styles.goArrow}>
      <i className="fa-regular fa-credit-card"></i>
      </div>
    </div>
  </a>
</div>
    
  )
}

export default Total