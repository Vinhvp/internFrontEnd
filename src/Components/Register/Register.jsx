import React from 'react';
import * as styled from './Register.styled';
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonHome from '../ButtonHome/ButtonHome';
const Register = () => {
    return ( 
        <>
            <styled.RegisterCard>
                <h1 style={{marginTop: "47px"}}>Register</h1>
                <styled.Container>
                    <form>
                        <Input label="NAME" name="name" placeholder="Enter your name..." mb="24px"></Input>
                        <Input label="E-MAIL" name="password" placeholder="Enter your E-mail..." mb="24px"></Input>
                        <Input type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Text>
                        
                            <p style={{display: "block"}}>By creating an account you agree to the</p>
                            <Link style={{display: "inline-block"}} text="Terms or Services " size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link><p style={{display: "inline-block"}}>and</p><Link text="Privacy Policy" size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link>


                        </styled.Text>
                    </form>
                        <ButtonHome bgcolor="var( --pumpkin-orange)" name="Register" color='var(--white-two)' mt='51px' mb='70px'></ButtonHome>
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