import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import { useState } from 'react'
import { products } from './service/products'

function App() {
   
   const getInitialCart =() =>{
    let cartItems = {};
    for (let i = 1; i < products.length + 1;i++){
      cartItems[i] = 0
    }
    return cartItems
   }
  
   const [cartItems, setCartItems] = useState(getInitialCart())

   const handleAddToCart =(id)=>{
    setCartItems((prev) => ({...prev, [id]:prev[id] + 1}))
    console.log(cartItems)
   }

   const handleRemoveFromCart =(id)=>{
    if (cartItems[id] > 0)
    setCartItems((prev) => ({...prev, [id]:prev[id] - 1}))
    console.log(cartItems)
   }

  return (
    <>
    <Router>
      <NavBar />
    <Routes>
          <Route path="/" element={<Home onAdd={handleAddToCart} Cart={cartItems}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart Cart={cartItems} onRemove={handleRemoveFromCart} onAdd={handleAddToCart}/>} />
        </Routes>

    </Router>
      
    </>
  )
}

export default App
