import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate=useNavigate()

  return (
   <div>
    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" onClick={()=>navigate("/")} >Shoping Card</a>
    <button className="navbar-toggler" type="btn-button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        
        <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        
        <NavLink className="nav-link " to="/newProduct"  >New Product</NavLink>
        </li>
        <li className="nav-item">
        
        <NavLink className="nav-link" to="/ProductList">List</NavLink>
        </li>
        <li className="nav-item">
        
        <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>
  );
}

export default Navbar