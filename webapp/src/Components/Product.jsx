import React, { useEffect, useState } from 'react';

export default function Product(props) {

  const [product] = useState(props.product);


  return (
    <div className='product-box' key={product.id}>
      <img src={product.image} alt={product.name} />
      <div>Name: {product.name}</div>
      <div>Product #: {product.number} </div>
      <div className='product-price'>
        Price: ${product.price}
      </div>
      <div>Quantity: {product.quantity}</div>
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
