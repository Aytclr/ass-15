import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate=useNavigate()

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" onClick={()=>navigate("/")} >Shoping Card</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/newProduct" >New Product</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/ProductList" >Product List</NavLink>
        </li>
        <li className="nav-item dropdown">
        <NavLink className="nav-link" to="/about" >About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  );
}

export default Navbar