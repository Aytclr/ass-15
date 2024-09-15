import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const initialState = {
  name:"",
  image:"",
  price:"",
  dampingRate: 0.8,
  amount: 0,
};

const NewProduct = () => {
  const [formdata, setFormData] = useState(initialState);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };
  console.log(formdata);
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("https://66e6e0ff17055714e58acda4.mockapi.io/products",formdata)
    setFormData(initialState)
  }
  return (
    <div className="container">
      <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewProduct;
