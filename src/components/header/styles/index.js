import styled from 'styled-components/macro';
import { CYAN } from '../../../constants/colors';

export const Container = styled.div`
    /* display: flex;
    flex-direction: column; */
    width: 100%;
`;

export const UpperSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
`;

export const LowerSection = styled.div`
    padding: 10px;
    background-color: ${() => `${CYAN}`};
`;

export const SearchContainer = styled.div`
    width: 50%;
    margin-left: 20px;
`;

export const Title = styled.h1`
    text-transform: capitalize;
    margin: 0;
`;

export const Action = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    margin: 0;
    font-size: 15px;
    color: ${() => `${CYAN}`};
`;