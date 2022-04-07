import React from 'react';
import * as styled from "./Login.styled";
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonHome from './../ButtonHome/ButtonHome';

class Login extends React.Component {
  constructor(props){
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <styled.LoginCard>
                <h1 style={{textAlign: "center", marginBottom:"35px", marginTop:"35px"}}>Log In</h1>
                <styled.Container>
                    <form>

                        <Input type="text" label="EMAIL" name="email" placeholder="Enter your email..." mb="24px"></Input>
                        <Input type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Checkbox>
                            <div>
                                <input type="checkbox" id="remember" name="rememberpassword" value="rememberPassword" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
                                <label for="rememberpassword">Remember password</label>
                            </div>
                            <div>
                                <Link href="#" color="var(--greyish-brown)" text="Forgot your password?" size="14px" fontWeight="600"></Link>
                            </div>
                            
                        </styled.Checkbox>
                    </form>
                    <ButtonHome name="Log In" bgcolor="var(--white-four);">Log In</ButtonHome>
                    <div style={{margin: "0 auto", textAlign:"center"}}>
                        <Link href="#" color="var(--greyish-brown)" text="Dont-have-an-account ?" size="14px" fontWeight="500"
                        style={{textAlign: "center"}}>
                        </Link>
                        <Link href="#" style={{textAlign: "center"}} text="Register" color="var(--pumpkin-orange)" fontWeight="500" size="14px"></Link>
                    </div>
                </styled.Container>
            </styled.LoginCard>
        );
    }
}
 
export default Login;