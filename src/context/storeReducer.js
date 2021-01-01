export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};
