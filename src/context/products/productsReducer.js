import {
    GET_PRODUCTS,
    SEARCH_PRODUCTS,
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
                searched: action.payload,
                loading: false
            };
        case CLEAR_PRODUCTS:
            return {
                ...state,
                searched: [],
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