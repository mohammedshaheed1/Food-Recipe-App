import React from 'react'

function AddToCart(props) {
  return (
   <div className="add-to-cart-wrapper">
    <div className="add-to-cart-item">
        <img src={props.data.heading} alt="" />
        <h6>{props.data.image}</h6>
    </div>
   </div>
  )
}

export default AddToCart