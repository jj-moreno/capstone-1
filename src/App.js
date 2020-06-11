import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import StoreState from './context/StoreState';

function App() {
  return (
    <StoreState>
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1>Sports Balls E-Commerce</h1>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </Router>
    </StoreState>
  );
}

export default App;
