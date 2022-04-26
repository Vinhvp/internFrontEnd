import React, {useState} from 'react';
import * as styled from "./Login.styled";
import Input from '../Input/Input';
import Link from '../Link/Link';
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
                localStorage.setItem('token', res.data.token)
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
                                <input type="checkbox" id="remember" name="rememberpassword" value="rememberPassword" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
                                <label for="rememberpassword">Remember password</label>
                            </div>
                            <div>
                                <Link href="#" color="var(--greyish-brown)" text="Forgot your password?" size="14px" fontWeight="600"></Link>
                            </div>
                            
                        </styled.Checkbox>
                        <ButtonHome  onClick={onSubmitEvent} error={error}  name="Log In" bgcolor="var(--white-four);" mb='85px' mt='46px'>Log In</ButtonHome>
                    </form>
                    <section style={{margin: "0 auto", textAlign:"center"}}>
                        <p style={{display:"inline-block"}}>Don't have an account?</p>
                        <Link href="#" style={{textAlign: "center"}} text="Register" color="var(--pumpkin-orange)" fontWeight="500" size="14px"></Link>
                    </section>
                </styled.Container>
            </styled.LoginCard>
        );
}

 
export default Login;