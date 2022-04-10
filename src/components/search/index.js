import React from 'react';
import Button from '../button';
import { Action, Container, Input } from './styles';
import { BsSearch } from 'react-icons/bs';
import { WHITE } from '../../constants/colors';

const Search = ({ value, setValue }) => { 
    const handleSearch = () => { 

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