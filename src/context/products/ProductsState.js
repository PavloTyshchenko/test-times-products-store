import React, { useReducer } from 'react';
import axios from 'axios';
import ProductsContext from './productsContext';
import ProductsReducer from './productsReducer';
import {
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SET_LOADING,
    CLEAR_PRODUCTS
} from '../types';

const ProductsState = props => {
    const initialState = {
        products: [],
        searched: [],
        loading: false
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

        dispatch({
            type: SEARCH_PRODUCTS,
            payload: res.data.products.filter((product) => {
                return product.name.toLowerCase().indexOf(search_term.toLowerCase()) > -1;
            })
        });
    };

    // Clear Products
    const clearProducts = () => {
        dispatch({ type: CLEAR_PRODUCTS })
    };

    // Set loading 
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                loading: state.loading,
                searched: state.searched,
                getProducts,
                searchProducts,
                clearProducts
            }} >

            {props.children}

        </ProductsContext.Provider>
    );
};

export default ProductsState;