import { SET_CART_ITEM } from '../action-types';

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case SET_CART_ITEM:
            return {
                ...state,
                products: [...state.cart, action.cartItem],
            };
        default:
            return state;
    }
}

export default cartReducer;