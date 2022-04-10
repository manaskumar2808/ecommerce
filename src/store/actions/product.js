import { SET_PRODUCTS } from '../action-types';

export const getAllProducts = () => { 
    return async dispatch => { 
        const data = await fetch('data/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const { products } = await data.json();
        dispatch(setAllProducts(products));
    }
}

export const updateProductList = (products) => { 
    return dispatch => { 
        dispatch(setAllProducts(products));
    }
}

const setAllProducts = (products) => { 
    return {
        type: SET_PRODUCTS, 
        products,
    };
}
