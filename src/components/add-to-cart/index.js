import React, { useState } from 'react';
import {
    Availability, Brand, Section, Container, Discount, OldPrice, Display, Info, Photo, Price, Text, Title, Quantity
} from './styles';
import Button from '../button';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/actions';
 
const AddToCart = ({ product: { product_title, p_image, list_price, brand, id, stock, discount }, closeSelf }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => { 
        if (quantity + 1 < stk) { 
            setQuantity(qty => qty + 1);
        }
    }

    const decreaseQuantity = () => { 
        if (quantity - 1 >= 1) { 
            setQuantity(qty => qty - 1);
        }
    }

    const handleAddToCart = () => { 
        dispatch(addCartItem(product, quantity));
    }

    const discountPrice = !discount.substr(-1, 1);
    const price = list_price - (list_price * (discountPrice / 100));
    const stk = parseInt(stock);
    const available = stk > 0;

    console.log(stk);

    return (
        <Container>
            <Display>
                <Photo src={p_image} alt={product_title} />
            </Display>
            <div style={{ width: 50 }} />
            <Info>
                <Title>{product_title}</Title>
                <Section>
                    {discount ? <><Price>₹{price}</Price><div style={{ width: 10 }} /><OldPrice><s>₹{list_price}</s></OldPrice><div style={{ width: 10 }} /><Discount>{discount + ' off'}</Discount></> : <Price>₹{list_price}</Price>}
                </Section>
                <Section>
                    <Text>Brand</Text><div style={{ width: 10 }} /><Brand>{brand}</Brand>
                </Section>
                <Section>
                    <Text>Availability</Text><div style={{ width: 10 }} /><Availability available={available}>{available ? "In Stock" : "Out of Stock"}</Availability>
                </Section>
                <Section>
                    <Button onClick={decreaseQuantity}>
                        <AiOutlineMinus size={20} />
                    </Button>
                    <div style={{ width: 10 }} />
                    <Quantity>{quantity}</Quantity>
                    <div style={{ width: 10 }} />
                    <Button onClick={increaseQuantity}>
                        <AiOutlinePlus size={20} />
                    </Button>
                </Section>
                <Section style={{ height: 40 }}>
                    <Button onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </Section>
            </Info>
        </Container>
    );
}

export default AddToCart;