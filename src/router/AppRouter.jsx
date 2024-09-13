import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Main from '../pages/Main'
import About from '../pages/About'
import NewProduct from '../pages/NewProduct'
import ProductList from '../pages/ProductList'
import UpdateProduct from '../pages/UpdateProduct'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/newProduct" element={<NewProduct/>} />
            <Route path="/ProductList" element={<ProductList/>} />
            <Route path="/UpdateProduct" element={<UpdateProduct/>} />
            <Route path="*" element={<Main/>} />
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default AppRouter