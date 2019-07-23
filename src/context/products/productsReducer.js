import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    SEARCH_PRODUCTS,
    SET_LOADING,
    CLEAR_PRODUCTS,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                category: action.payload.category,
                search_term: action.payload.search_term,
                showClear: true,
                loading: false
            };
        case CLEAR_PRODUCTS:
            return {
                ...state,
                category: 'All',
                search_term: '',
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