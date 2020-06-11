import React, { useContext } from 'react';
import StoreContext from '../context/storeContext';

function Cart(props) {
  const { cartItems } = useContext(StoreContext);
  return (
    <React.Fragment>
      <h1 style={{ width: '100vw' }}>
        <u>Your Cart</u>
      </h1>
      <div className='cart'>
        {cartItems.map((item) => {
          return (
            <div className='cart-box'>
              <img src={item.image} alt={item.name} />
              <div>Name: {item.name}</div>
              <div className='product-price'>
                Price: ${item.price.toFixed(2)}
              </div>
              <div>Quanitity: {item.quantity}</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Cart;
