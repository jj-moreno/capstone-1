import React, { useState } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import data from '../data';

function Home() {
  const [inventory, setInventory] = useState(data);
  console.log(inventory);
  return (
    <>
      <header className='App-header'>
        <div className='App-logo'>Sports Balls Inventory</div>
      </header>
    </>
  );
}

export default Home;
