import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({name,image,price,id,dampingRate,amount,getProduts}) => {

  const navigate = useNavigate()

  const handleDelete=async()=>{
    await axios.delete(
      `https://66e6e0ff17055714e58acda4.mockapi.io/products/${id}`
    )
    getProduts()
  }

  const handlePlus=async()=>{
      await axios.put(
        `https://66e6e0ff17055714e58acda4.mockapi.io/products/${id}`,
        {name,image,price,id,dampingRate,amount: Number(amount)+1}
      )
      getProduts()
    }

    const handleMinus=async()=>{
      if(Number(amount)>1){
        await axios.put(
        `https://66e6e0ff17055714e58acda4.mockapi.io/products/${id}`,
        {name,image,price,id,dampingRate,amount: Number(amount)-1}
      )
    }else if(Number(amount)===1){
      handleDelete()
    }
      
      getProduts()
    }



  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            height="250px"
            title={""}
            onClick={()=>navigate(`/UpdateProduct/${name}`,{state:{name,image,price,id,dampingRate,amount}})}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {name}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                $<span className="damping-price">{(price*dampingRate).toFixed(2)}</span>
                <span className="h5 text-dark text-decoration-line-through">
                {price}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button onClick={handleMinus} className="btn btn-secondary btn-sm bg-danger">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button onClick={handlePlus} className="btn btn-secondary btn-sm bg-danger">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button onClick={handleDelete} className="btn btn-danger btn-sm w-100 remove-product">
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $<span className="product-line-price">{(price*0.8*amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
