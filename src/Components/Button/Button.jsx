import React from 'react';
import StyledComponents from 'styled-components';
import * as styled from './Button.styled';
const Button = (props) => {
    const disabled = props.disabled;
    return ( 
        <>
            {Boolean(disabled) ?(<styled.Button  onClick= {props.onClick} bgcolor={props.bgcolor} color={props.color} w={props.w} h={props.h} disabled>
                {props.name}
            </styled.Button>) :(<styled.Button  onClick= {props.onClick} bgcolor={props.bgcolor} color={props.color} w={props.w} h={props.h} >
                {props.name}
            </styled.Button>)}
        </>
     );
}
 
export default Button;