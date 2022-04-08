import React from 'react';
import * as styled from "./Input.styled";
const Input = (props) => {
    
    return (  
        <styled.InputContainer mb={props.mb} mt={props.mt}>
            <label htmlFor={props.label}>{props.label}</label>
            <styled.InputT type={props.type} name={props.name} placeholder={props.placeholder}/>
        </styled.InputContainer>
    );
}

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter something...'
}

export default Input;