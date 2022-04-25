import React, {useContext, useState} from 'react';
import emailjs from '@emailjs/browser';
import * as styled from './Register.styled';
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonHome from '../ButtonHome/ButtonHome';
import {tool} from '../../App';
const axios = require('axios');
const Register = (props) => {
    const setEmails = useContext(tool);
    const [error,setError] = useState({
        NAME: true,
        EMAIL: true,
        PASSWORD: true
    });
    const [account, setAccount] = useState({
        name:'',
        email:'',
        password: '',
        verify:'false'
    })

    
    const onSubmitEvent= (e)=>{
        e.preventDefault();
        
        axios({
            method: 'post',
            url: 'http://localhost:7000/account',
            data: account
        })
        .then((response)=>{
            localStorage.setItem('register', account.email);
            if(response.data.status == 'true'){
                console.log(account.email);
                setEmails.email(account.email);
                alert('Please Verify Your Email !!');
                window.location.replace("http://localhost:3000");
            }
            else{
                alert('Register false, your email is valid !!');
            }
        })
        
        
          
    }
    return ( 
        <>
            <styled.RegisterCard>
                <h1 style={{marginTop: "47px"}}>Register</h1>
                <styled.Container>
                {/* onSubmit={onSubmitEvent} */}
                    <form method='POST'>
                        <Input getValue={setAccount} setError={setError} label="NAME" name="name" placeholder="Enter your name..." mb="24px"></Input>
                        <Input getValue={setAccount} setError={setError} type='email' label="EMAIL" name="email" placeholder="aware@example.com" mb="24px"></Input>
                        <Input getValue={setAccount} setError={setError} type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Text>
                        
                            <p style={{display: "block"}}>By creating an account you agree to the</p>
                            <Link style={{display: "inline-block"}} text="Terms or Services " size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link><p style={{display: "inline-block"}}>and</p><Link text="Privacy Policy" size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link>


                        </styled.Text>
                        <ButtonHome onClick={onSubmitEvent} type='submit' error={error} name="Register" color='var(--white-two)' mt='51px' mb='70px'></ButtonHome>
                    </form>
                    <div style={{textAlign: 'center'}}>
                        <p style={{display:"inline-block"}}>Do you have an account?</p>
                        <Link color='var( --pumpkin-orange)' text='Log In' fontWeight='bold'></Link>
                    </div>
                </styled.Container>   
            </styled.RegisterCard>  
        </>
     );
}
 
export default Register;