import styled from 'styled-components/macro';
import { BLACK, ORANGE } from '../../../constants/colors';

export const Container = styled.div`
    height: 350px;
    width: 300px;
    justify-content: center;
    margin: 20px;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const Display = styled.div`
    width: 100%;
    height: 54%;
`;

export const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Action = styled.div`
    padding: 10px 20px;
    height: 50px;
`;

export const Info = styled.div`
    padding: 10px 20px;
    text-align: center;
`;

export const Title = styled.p`
    color: ${() => `${BLACK}`};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
`;

export const Price = styled.p`
    color: ${() => `${ORANGE}`};
    margin: 0;
`;