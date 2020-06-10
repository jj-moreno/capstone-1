import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  React.useEffect(() => {
    const urlParam = props.match.params.id;
    console.log(urlParam);
  }, []);
  return (
    <div className='Cart'>
      <p>Cart Component</p>
    </div>
  );
}

export default Cart;
