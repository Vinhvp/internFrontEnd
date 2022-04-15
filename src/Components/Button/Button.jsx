import React from 'react';
import StyledComponents from 'styled-components';
import * as styled from './Button.styled';
const Button = (props) => {
    return ( 
        <>
            <styled.Button bgcolor={props.bgcolor} color={props.color} w={props.w} h={props.h}>
                {props.name}
            </styled.Button>
        </>
     );
}
 
export default Button;