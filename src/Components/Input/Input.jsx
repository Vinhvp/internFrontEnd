import React from 'react';
import * as styled from "./Input.styled";
const Input = (props) => {
    
    return (  
        <styled.InputContainer mb={props.mb}>
            <label htmlFor={props.label}>{props.label}</label>
            <styled.InputT type={props.type} name={props.name} placeholder={props.placeholder}/>
        </styled.InputContainer>
    );
}

export default Input;