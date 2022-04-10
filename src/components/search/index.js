import React from 'react';
import Button from '../button';
import { Action, Container, Input } from './styles';
import { BsSearch } from 'react-icons/bs';
import { WHITE } from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductList } from '../../store/actions';
import Fuse from 'fuse.js';

const Search = ({ value, setValue }) => { 
    const dispatch = useDispatch();
    const products = useSelector(state => state.prd.products);

    const handleSearch = () => { 
        if (value && value.trim().length > 0) { 
            const fuse = new Fuse(products, {
                keys: [
                    {
                        name: 'product_title',
                        weight: 0.7,
                    },
                    {
                        name: 'brand',
                        weight: 0.3,
                    }
                ],
            });
    
            const result = fuse.search(value);
            const searchProducts = result.map(r => r.item);
            dispatch(updateProductList(searchProducts));   
        }
    }

    return (
        <Container>
            <Input value={value} onChange={e => setValue(e.target.value)} placeholder='Search By Brand or Title' />
            <Action>
                <Button onClick={handleSearch}>
                    <BsSearch color={WHITE} size={20} />
                </Button>
            </Action>
        </Container>
    );
}

export default Search;