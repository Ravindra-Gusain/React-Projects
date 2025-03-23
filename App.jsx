import React, { useState } from 'react';
import Navbar from './Navbar';
import './app.css'
import Product from './Product';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './cart';
import Search from './search';
import ProductDetails from './ProductDetails';
import { items } from './Data';

const App=()=>{
  const [data,setData]=useState([...items])
  const [cart,setCart]=useState([])
  return (
    <>
    <BrowserRouter>
      <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
        <Route path="/search/:term" element={<Search cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
