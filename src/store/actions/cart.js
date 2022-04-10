import { SET_CART_ITEM } from '../action-types';

export const addCartItem = (product, quantity) => { 
    return dispatch => {
        const cartItem = {
            product,
            quantity,
        };
        dispatch(setCartItem(cartItem));
    }
}

const setCartItem = (cartItem) => { 
    return {
        type: SET_CART_ITEM,
        cartItem,
    };
}