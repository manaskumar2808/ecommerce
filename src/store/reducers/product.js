import { SET_PRODUCTS } from '../action-types';

const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        default:
            return state;
    }
}

export default productReducer;