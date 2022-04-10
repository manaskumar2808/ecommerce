import styled from 'styled-components/macro';
import { BLACK, GREEN, GREY, ORANGE, PURPLE, RED } from '../../../constants/colors';

export const Container = styled.div`
    /* width: 100%; */
    height: 350px;
    padding: 20px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    margin: auto;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const Display = styled.div`
    height: 200px;
    width: 300px;
    overflow: hidden;
    border-radius: 5px;
    border: 0.5px solid #ccc;
`;

export const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Info = styled.div`

`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.h2`
    color: ${() => `${BLACK}`};
`;

export const Price = styled.p`
    color: ${() => `${ORANGE}`};
    font-size: 18px;
`;

export const OldPrice = styled.p`
    color: ${() => `${GREY}`};
    font-size: 14px;
`;

export const Discount = styled.p`
    color: ${() => `${GREEN}`};
    font-size: 14px;
`;

export const Text = styled.p`
    color: ${() => `${BLACK}`};
    font-size: 16px;
`;

export const Brand = styled.p`
    color: ${() => `${PURPLE}`};
    font-size: 16px;
`;

export const Availability = styled.p`
    color: ${({ available }) => available ? `${GREEN}` : `${RED}`};
    font-size: 16px;
`; 

export const Quantity = styled.p`
    color: ${() => `${ORANGE}`};
    font-size: 16px;
`;