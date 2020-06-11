import React, { useContext } from 'react';
import StoreContext from '../context/storeContext';

function Cart(props) {
  const { cartItems } = useContext(StoreContext);
  return (
    <div className='cart'>
      {cartItems.map((item) => {
        return (
          <div className='cart-box'>
            <img src={item.image} alt={item.name} />
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <div>Quanitity: {item.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
