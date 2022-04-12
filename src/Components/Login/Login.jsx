import React, {useState} from 'react';
import * as styled from "./Login.styled";
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonHome from './../ButtonHome/ButtonHome';


const Login = (props) =>{
    const [error,setError] = useState({
        EMAIL: true,
        PASSWORD: true, 
    });
    
        return (
            <styled.LoginCard>
                <h1 style={{textAlign: "center", marginBottom:"35px", marginTop:"35px"}}>Log In</h1>
                <styled.Container>
                    <form>

                        <Input setError= {setError} type="email" label="EMAIL" name="email" placeholder="aware@example.com" mb="24px" ></Input>
                        <Input setError= {setError} type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Checkbox>
                            <div>
                                <input type="checkbox" id="remember" name="rememberpassword" value="rememberPassword" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
                                <label for="rememberpassword">Remember password</label>
                            </div>
                            <div>
                                <Link href="#" color="var(--greyish-brown)" text="Forgot your password?" size="14px" fontWeight="600"></Link>
                            </div>
                            
                        </styled.Checkbox>
                        <ButtonHome  error={error}  name="Log In" bgcolor="var(--white-four);" mb='85px' mt='46px'>Log In</ButtonHome>
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