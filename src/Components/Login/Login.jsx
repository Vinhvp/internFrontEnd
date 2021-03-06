import React, {useState} from 'react';
import * as styled from "./Login.styled";
import Input from '../Input/Input';
import { Routes, Route, Link } from "react-router-dom";
import ButtonHome from './../ButtonHome/ButtonHome';
const axios = require('axios');

const Login = (props) =>{
    const [error,setError] = useState({
        EMAIL: true,
        PASSWORD: true, 
    });
    const [account, setAccount] = useState({
        email:'',
        password: '',
    })
    const forgotHandle = ()=>{
        props.setForgot(true);
        // window.location.replace('account/forgotPass');
    }
    
    const onSubmitEvent = (e)=>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:7000/account/login/' + account.email,
            data: account
        })
        .then((res)=>{
            console.log(res.data);
            if(res.data.password == 'true'){
                alert('Login successful !!');
                localStorage.removeItem('register');
                localStorage.setItem('user',account.email);
                localStorage.setItem('productLength',0);
                localStorage.setItem('product',"");
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name',res.data.name);
                window.location.replace('http://localhost:3000');
            }
            else{
                alert('Login failed, Please try again !!')
            }
        })
    }
        return (
            <styled.LoginCard>
                <h1 style={{textAlign: "center", marginBottom:"35px", marginTop:"35px"}}>Log In</h1>
                <styled.Container>
                    <form method="POST">

                        <Input getValue={setAccount} setError= {setError} type="email" label="EMAIL" name="email" placeholder="aware@example.com" mb="24px" ></Input>
                        <Input getValue={setAccount} setError= {setError} type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Checkbox>
                            <div>
                                <input type="checkbox" id="remember" name="rememberpassword" value="rememberPassword" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }} checked/>
                                <label for="rememberpassword"  >Remember password</label>
                            </div>
                            <div>
                                <a onClick={forgotHandle} className="link">Forgot your password?</a>
                            </div>
                            
                        </styled.Checkbox>
                        {error.EMAIL || error.PASSWORD ? (<ButtonHome  onClick={onSubmitEvent} error={error}  name="Log In" bgcolor="var(--white-four);" mb='85px' mt='46px' disabled={'disabled'}>Log In</ButtonHome>) :(<ButtonHome  onClick={onSubmitEvent} error={error}  name="Log In" bgcolor="var(--white-four);" mb='85px' mt='46px'>Log In</ButtonHome>)}
                    </form>
                    <section style={{margin: "0 auto", textAlign:"center"}}>
                        <p style={{display:"inline-block"}}>Don't have an account?</p>
                        <Link to="#" className="link" href="#" style={{textAlign: "center"}}>Register</Link>
                    </section>
                </styled.Container>
            </styled.LoginCard>
        );
}

 
export default Login;