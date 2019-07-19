import React, { useReducer } from 'react';
import axios from 'axios';
import ProductsContext from './productsContext';
import ProductsReducer from './productsReducer';
import {
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_BY_CATEGORY,
    SET_LOADING,
    CLEAR_PRODUCTS
} from '../types';

const ProductsState = props => {
    const initialState = {
        products: [],

        search_term: '',
        category: '',
        showClear: false,

        loading: true
    };

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    // Get products
    const getProducts = async () => {
        setLoading();

        const res = await axios.get('https://demo8421975.mockable.io/products');

        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.products
        });
    };

    // Search products
    const searchProducts = async (search_term) => {
        setLoading();

        const res = await axios.get('https://demo8421975.mockable.io/products');

        let products = [];
        if (state.category) {
            products = res.data.products
                .filter(product => {
                    return product.bsr_category.toLowerCase().indexOf(state.category.toLowerCase()) > -1
                })
                .filter(product => {
                    return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1
                });
        } else {
            products = res.data.products.filter(product => {
                return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1
            })
        };

        dispatch({
            type: SEARCH_PRODUCTS,
            payload: {
                products,
                search_term
            }
        });
    };

    // Get products by category
    const searchProductsByCategory = async (category) => {
        setLoading();

        const res = await axios.get('https://demo8421975.mockable.io/products');

        dispatch({
            type: SEARCH_PRODUCTS_BY_CATEGORY,
            payload: {
                products: res.data.products.filter(product => {
                    return product.bsr_category.toLowerCase().indexOf(category.toLowerCase()) > -1
                }),
                category
            }
        });
    };

    // Clear Products
    const clearProducts = () => {
        getProducts();
        dispatch({ type: CLEAR_PRODUCTS });
    };

    // Set loading 
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                loading: state.loading,
                showClear: state.showClear,
                search_term: state.search_term,
                category: state.category,
                getProducts,
                searchProducts,
                searchProductsByCategory,
                clearProducts
            }} >

            {props.children}

        </ProductsContext.Provider>
    );
};

export default ProductsState;