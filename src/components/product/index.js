import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../product-card';
import { Container } from './styles';
import { getAllProducts } from '../../store/actions';

const Product = () => { 
    const dispatch = useDispatch();
    const products = useSelector(state => state.prd.products);

    useEffect(() => { 
        dispatch(getAllProducts());
    }, []);

    return (
        <Container>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </Container>
    );
}

export default Product;