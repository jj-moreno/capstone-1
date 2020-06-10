import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  const [idVal, setIdVal] = React.useState(49999);
  return (
    <div class='Product'>
      <Link to={`/cart/${idVal}`}>To Shopping Cart</Link>
      <p>This is the Product Component</p>
    </div>
  );
}
