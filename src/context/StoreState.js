import React, { useReducer } from 'react';
import StoreContext from './storeContext';
import storeReducer from './storeReducer';
import data from '../data.json';

const StoreState = (props) => {
  const initialState = {
    products: [...data],
    cartItems: [],
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  // Add Cart
  const addCartItem = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const updateProductQuantity = (product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
  };

  return (
    <StoreContext.Provider
      value={{
        products: state.products,
        cartItems: state.cartItems,
        addCartItem,
        updateProductQuantity,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreState;
