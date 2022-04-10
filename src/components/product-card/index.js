import React, { useEffect, useState } from 'react';
import Button from '../button';
import { Action, Container, Display, Info, Photo, Price, Title } from './styles';

const ProductCard = ({ product: { product_title, p_image, list_price, brand, id, stock, discount } }) => { 
    const discountPrice = !discount.substr(-1, 1);
    const price = list_price - (list_price * (discountPrice / 100));

    return (
        <Container>
            <Display>
                <Photo src={p_image} alt={product_title} />
            </Display>
            <Action>
                <Button>
                    Add To Cart
                </Button>
            </Action>
            <Info>
                <Title>
                    {product_title}
                </Title>
                <div style={{ height: 20 }} />
                {discount ? <Price>₹{price} <s>₹{list_price}</s></Price> : <Price>₹{list_price}</Price>}
            </Info>
        </Container>
    );
}

export default ProductCard;