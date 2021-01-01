import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import StoreContext from '../context/storeContext';

function Home() {
  const {
    products,
    addCartItem,
    cartItems,
    updateProductQuantity,
  } = useContext(StoreContext);

  // CREDIT FOR 'addToCart' GOES TO AMIR FROM AFTERNOON OFFICE HOURS JUNE 10th, 2020
  const addToCart = (product, index) => {
    const purchasedProduct = { ...product, quantity: 1 };
    addCartItem(purchasedProduct);
    updateProduct(product, index);
  };

  // CREDIT FOR 'updateProduct' GOES TO AMIR FROM AFTERNOON OFFICE HOURS JUNE 10th, 2020
  const updateProduct = (product, index) => {
    const updatedProduct = { ...product, quantity: product.quantity - 1 };
    const productsCopy = [...products]; //immutability
    productsCopy.splice(index, 1, updatedProduct);
    updateProductQuantity(productsCopy);
  };

  let productsFilter = '';
  const createFilter = (e) => {
    productsFilter = e.target.value;
  };

  let productsFiltered = [];

  const handleProductsFilter = () => {
    productsFiltered = products.filter((p) =>
      Object.values(p).includes(productsFilter)
    );
  };

  return (
    <React.Fragment>
      {console.log(products, cartItems, productsFilter)}
      <nav id='nav-bar'>
        <input
          id='search-input'
          type='text'
          placeholder='Search item'
          onChange={createFilter}
        ></input>
        <button id='search-btn' onClick={handleProductsFilter}>
          Search
        </button>
        <Link id='cart-link' to='/cart'>
          <div className='icon-cart' style={{ float: 'left' }}>
            <div
              className='cart-line-1'
              style={{ backgroundColor: '#FFFFF' }}
            ></div>
            <div
              className='cart-line-2'
              style={{ backgroundColor: '#FFFFF' }}
            ></div>
            <div
              className='cart-line-3'
              style={{ backgroundColor: '#FFFFF' }}
            ></div>
            <div
              className='cart-wheel'
              style={{ backgroundColor: '#FFFFF' }}
            ></div>
            {<span id='lblCartCount'>{cartItems.length}</span>}
          </div>
        </Link>
      </nav>
      <section id='product-ctnr'>
        {productsFiltered.length === 0
          ? products.map((product, index) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  index={index}
                />
              );
            })
          : productsFiltered.map((product, index) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  index={index}
                />
              );
            })}
      </section>
    </React.Fragment>
  );
  /* CREDIT FOR ICON CART GOES TO Marty from following CODEPEN
        https://codepen.io/okra/pen/Ekyaz */
  /* CREDIT FOR LABEL CART COUNT GOES TO Unknown from following JSFIDDLE 
        http://jsfiddle.net/LhrLe0j6/1/ */
  /* CREDIT FOR METHOD 'scrollIntoView' GOES TO lonut B from stackoverflow 
        https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click*/
}

export default Home;
