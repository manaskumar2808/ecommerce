import styled from 'styled-components/macro';
import { ORANGE, WHITE } from '../../../constants/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Btn = styled.button`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    background: ${() => `${ORANGE}`};
    padding: 0 10px;
    color: ${() => `${WHITE}`};
`;