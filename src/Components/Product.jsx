import React from 'react';

export default function Product(props) {
  return (
    <div className='product-box' key='products.id'>
      <img src={props.product.image} alt={props.product.name} />
      <div>Name: {props.product.name}</div>
      <div>Product #: {props.product.number} </div>
      <div className='product-price'>
        Price: ${props.product.price.toFixed(2)}
      </div>
      <div>Quantity: {props.product.quantity}</div>
      <button
        id='add-to-cart-btn'
        type='button'
        onClick={() => {
          props.addToCart(props.product, props.index);
          document.getElementById('lblCartCount').scrollIntoView(false);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
