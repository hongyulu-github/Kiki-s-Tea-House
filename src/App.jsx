import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  

  return (
    <>
    <Router>
      <NavBar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </Router>
      
    </>
  )
}

export default App
