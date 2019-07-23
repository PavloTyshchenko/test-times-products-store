import React, { useReducer } from 'react';
import axios from 'axios';
import ProductsContext from './productsContext';
import ProductsReducer from './productsReducer';
import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    SEARCH_PRODUCTS,
    SET_LOADING,
    CLEAR_PRODUCTS,
} from '../types';

const ProductsState = props => {
    const initialState = {
        products: [],
        categories: [],

        search_term: '',
        category: 'All',
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

    // Get Categories
    const getCategories = async () => {
        setLoading();

        const arr = [];
        arr.push("All"); // Initial category "ALL", not presented in json data.

        const res = await axios.get('https://demo8421975.mockable.io/products');

        res.data.products.forEach((product) => {
            if (arr.indexOf(product.bsr_category) === -1)
                arr.push(product.bsr_category);
        });

        dispatch({
            type: GET_CATEGORIES,
            payload: arr
        });
    };

    // Search products by category and search term
    const searchProducts = async (category = state.category, search_term = state.search_term) => {
        setLoading();

        const res = await axios.get('https://demo8421975.mockable.io/products');

        let products = [];

        if (category !== 'All') {
            products = res.data.products
                .filter((product) => {
                    return product.bsr_category.toLowerCase().indexOf(category.toLowerCase()) > -1
                });
        } else {
            products = res.data.products;
        }

        if (search_term) {
            products = products.filter((product) => {
                return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1
            });   
        };

        dispatch({
            type: SEARCH_PRODUCTS,
            payload: {
                products,
                category,
                search_term
            }
        });
    };
    // ------------------------------------------------

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
                categories: state.categories,
                loading: state.loading,
                showClear: state.showClear,
                search_term: state.search_term,
                category: state.category,
                getProducts,
                getCategories,
                searchProducts,
                // searchProductsByCategory,
                clearProducts,
            }} >

            {props.children}

        </ProductsContext.Provider>
    );
};

export default ProductsState;