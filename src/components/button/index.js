import React from 'react';
import { ORANGE } from '../../constants/colors';
import { Btn } from './styles';

const Button = ({ children, ...props }) => { 
    return (
        <Btn {...props}>
           {children}
        </Btn>
    );
}

export default Button;