import React from 'react';

import Navbar from './components/layout/Navbar';
import Search from './components/products/Search';
import Products from './components/products/Products';

import ProductsState from './context/products/ProductsState';

import './App.css';

function App() {
  return (
    <ProductsState>
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Products />
        </div>
      </div>
    </ProductsState>
  );
}

export default App;
