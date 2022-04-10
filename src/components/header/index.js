import React, { useState } from 'react';
import { Action, Container, LowerSection, SearchContainer, Text, Title, UpperSection } from './styles';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BLACK } from '../../constants/colors';
import Search from '../search';


const Header = () => {
    const [search, setSearch] = useState();

    return (
        <Container>
            <UpperSection>
                <Title>
                    My Store
                </Title>
                <Action>
                    <HiOutlineShoppingCart color={BLACK} size={30} />
                    <div style={{ width: 10 }} />
                    <Text>0</Text>
                </Action>
            </UpperSection>
            <LowerSection>
                <SearchContainer>
                    <Search value={search} setValue={setSearch} />
                </SearchContainer>
            </LowerSection>
        </Container>
    );
};

export default Header;
