import styled from 'styled-components/macro';
import { BLACK } from '../../../constants/colors';

export const Container = styled.div`
    width: 100%;
`;

export const ProductList = styled.div`
    display: flexbox;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Text = styled.p`
    margin: 0;
    font-size: 17px;
    color: ${() => `${BLACK}`};
    margin-top: 300px;
`;