import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/product'>
          <Product />
        </Route>
        <Route exact path='/cart/:id' component={Cart}></Route>
      </div>
    </Router>
  );
}

export default App;
