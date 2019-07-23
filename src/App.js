import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/pages/ProductsPage';

import ProductsState from './context/products/ProductsState';

import './App.css';

function App() {
  return (
    <ProductsState>
      <Router>
        <Layout>
          <Switch>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route path='/products/:category?/:term?' component={ProductsPage} />

          </Switch>
        </Layout>
      </Router>
    </ProductsState>
  );
}

export default App;
