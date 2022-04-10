import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../product-card';
import { Container, Text, ProductList } from './styles';
import { getAllProducts } from '../../store/actions';
import AddToCart from '../add-to-cart';

const Product = () => { 
    const dispatch = useDispatch();
    const products = useSelector(state => state.prd.products);

    const [addToCartProduct, setAddToCartProduct] = useState();

    useEffect(() => { 
        dispatch(getAllProducts());
    }, []);

    const onAddToCart = (product) => { 
        setAddToCartProduct(product);
    }

    const closeSelf = () => { 
        setAddToCartProduct(null);
    }

    return (
        <Container>
            {
                addToCartProduct && <AddToCart product={addToCartProduct} closeSelf={closeSelf} />
            }
            <ProductList>
                {
                    products.length === 0 ? <Text>No products found!</Text> :
                    products.map(product => <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />)
                }
            </ProductList>
        </Container>
    );
}

export default Product;