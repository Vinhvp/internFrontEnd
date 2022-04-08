import React from 'react';
import * as styled from "./Input.styled";
import {useState} from 'react'
import * as valid from './validInput';

const Input = (props) => {
    const [value, setValue] = useState('');
    const [errString, setErrString] = useState('');
    const [color,setColor] = useState('none');
    //function get value from input
    const handleGetValue = (e) => {
        setValue(()=>{
            return e.target.value;
        })
        pushErr()
    }
    //function check error
    const pushErr=()=>{
        if(props.label == 'EMAIL'){
            let tmp = valid.validateEmail(value);
            if(tmp=='case1'){
                setErrString(()=>{
                    return `Please enter the email address in the format aware@example.com!!`;
                })
                setColor(()=>{
                    return `1px solid var(--strawberry)`;
                })
            }
            else{
                setErrString(()=>'')
            }
        }
        if(props.label == 'PASSWORD'){
            let tmp = valid.validPass(value);
            
            if(tmp == 'case1'){
                setErrString(()=>{
                    return `Passwords must contain at least two of the following: numbers, and symbols.`;
                })
                setColor(()=>{
                    return `1px solid var(--strawberry)`;
                })
            }
            else{
                setErrString(()=>{
                    return ``;
                })
            }
        }
    }
    return (  
        
        <styled.InputContainer mb={props.mb} mt={props.mt}>
            <label htmlFor={props.label}>{props.label}</label>
            <styled.Input onKeyUp={handleGetValue} type={props.type} name={props.name} placeholder={props.placeholder} color={color}/>
            <p>{errString}</p>
        </styled.InputContainer>
        
    );
}

Input.defaultProps = {
    type: 'text',
    placeholder: 'Enter something...'
}

export default Input;