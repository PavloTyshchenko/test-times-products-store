import React from 'react';

import Layout from './components/layout/Layout';
import NavigationBar from './components/layout/NavigationBar';
import ProductsPage from './components/pages/ProductsPage';

import ProductsState from './context/products/ProductsState';

import './App.css';

function App() {
  return (
    <ProductsState>
      <Layout>

          <NavigationBar />
          <ProductsPage />

      </Layout>
    </ProductsState>
  );
}

export default App;
