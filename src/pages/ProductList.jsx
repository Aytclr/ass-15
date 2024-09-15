
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";



const ProductList = () => {

  const [products,setProducts]=useState([])
  const [Loading,setLoading]=useState(true)
  const [errorState,setErrorState]=useState(false)

  const getProduts=async()=>{
    try {
      const {data} = await axios("https://66e6e0ff17055714e58acda4.mockapi.io/products")
      setProducts(data)
      setErrorState(false)
    } catch (error) {
      setErrorState(true)
    }finally{
      setLoading(false)
    }
  }
useEffect(()=>{
getProduts()
},[])
  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        <p className="text-center text-danger w-100">Loading....</p>

        <>
          <article id="product-panel" className="col-md-5">
            {
              products.map((product)=>(<ProductCard {...product} key={product.id} />))
            }
            
          </article>
          <article className="col-md-5 m-3">
            <CardTotal products={products}  />
          </article>
        </>

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
