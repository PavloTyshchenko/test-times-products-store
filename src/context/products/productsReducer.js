import {
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_BY_CATEGORY,
    SET_LOADING,
    CLEAR_PRODUCTS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case SEARCH_PRODUCTS: 
            return {
                ...state,
                products: action.payload.products,
                search_term: action.payload.search_term,
                showClear: true,
                loading: false
            };
        case SEARCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: action.payload.products,
                category: action.payload.category,
                showClear: true,
                loading: false
            };
        case CLEAR_PRODUCTS:
            return {
                ...state,
                category: '',
                showClear: false,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}