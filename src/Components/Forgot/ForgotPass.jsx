import React, { useState } from 'react';
import * as styled from './ForgotPass.styled';
import ButtonHome from '../ButtonHome/ButtonHome';
import Link from '../Link/Link';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import CloseIcon from '@mui/icons-material/Close';
const axios = require('axios');
const ForgotPass = () => {
    const [password, setPassword] = useState('')
    const getPassword = (e)=>{
        setPassword(e.target.value);
    }
    const submitPassword = (e) =>{
        e.preventDefault();
        if(Boolean(password)){
            axios.post('http://localhost:7000/account/forgotPass/', {
                email: password
            })
            .then((res)=>{
                alert("Mail has already send, please get new password !!");
                window.location.replace('http://localhost:3000');
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    return ( 
        <>
            <styled.ForgotCard>
                <styled.ForgotContainer>
                    
                    <h1>Forgot Password</h1>
                    <p>Enter your e-mail address below and we'll get you back on track.</p>
                    <form method='post'>
                        <p className='email'>E-MAIL</p>
                        <input onChange={getPassword} className="inputForgot" label="E-MAIL" name="password" placeholder="Enter your E-mail..." ></input>
                        <button onClick={submitPassword} className="buttonForgot">Submit</button>
                    </form>
                    <div style={{textAlign: 'center'}}>
                        <p style={{display:"inline-block" ,fontSize: "14px", color:"var(--dark-grey)"}}>I remember my password now.</p>
                        <Link href="/" color='var( --pumpkin-orange)' text='aware' fontWeight='bold'></Link>
                    </div>
                </styled.ForgotContainer>
            </styled.ForgotCard>
        </>
    );
}
 
export default ForgotPass;