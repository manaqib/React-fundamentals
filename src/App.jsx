
import Products from './components/Products'
import './App.css'
import Counter from './components/Counter'
import RegistrationForm from './components/RegistrationForm'
import TaskManager from './components/TaskManager'
import ProductAPI from './components/ProductAPI'
import { useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import ShopingCart from './components/ShopingCart'
import ProductDetail from './components/ProductDetail'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  }
  return <div className='px-4'>
    <NavBar />
    <h1>My Shopping App</h1>  

<Routes>
  <Route path="/" element={<ProductAPI />} />
  <Route path="/task-manager" element={<TaskManager />} />
  <Route path="/register" element={<RegistrationForm />} />
   <Route path="/shoping-cart" element={<ShopingCart />} />
   <Route path='/product-detail/:id' element={<ProductDetail />} />
</Routes>
  </div>
}

export default App
