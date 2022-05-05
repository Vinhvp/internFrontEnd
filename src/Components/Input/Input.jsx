import React from 'react';
import * as styled from "./Input.styled";
import {useState} from 'react'
import * as valid from './validInput';


const Input = (props) => {
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    //function get value from input
    const handleGetValue = (e) => {
        let errorM = pushErr(e.target.value)
        setValue(e.target.value);
        
        props.getValue(prevState =>{
            return{
                ...prevState,
                [props.name]: e.target.value
            }
        })
        setErrorMessage(errorM);
        props.setError(prevState => {
            return {
                ...prevState,
                [props.label]: Boolean(errorM)
            }
        });
    }
    //function check error
    const pushErr=(inputValue)=>{
        if(props.label === 'EMAIL'){
            return valid.validateEmail(inputValue);
        }
        if(props.label === 'PASSWORD'){
            return valid.validPass(inputValue);
        }
        if(props.label ==='NAME'){
            return valid.validName(inputValue);
        }
    }
    return (  
        
        <styled.InputContainer mb={props.mb} mt={props.mt} >
            <label htmlFor={props.label}>{props.label}</label>
            <styled.Input error={Boolean(errorMessage)} onChange={handleGetValue} type={props.type} name={props.name} placeholder={props.placeholder} disabled={props.disable}/>
            <p>{errorMessage}</p>
        </styled.InputContainer>
        
    );
}

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter something...'
}

export default Input;