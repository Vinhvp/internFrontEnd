import React from 'react';
import * as styled from './ForgotPass.styled';
import ButtonHome from '../ButtonHome/ButtonHome';
import Link from '../Link/Link';
import Input from '../Input/Input';
const ForgotPass = () => {
    return ( 
        <>
            <styled.ForgotCard>
                <styled.ForgotContainer>
                    <h1>Forgot Password</h1>
                    <p>Enter your e-mail address below and we'll get you back on track.</p>
                    <Input label="E-MAIL" name="password" placeholder="Enter your E-mail..." mb="35px" mt='34px'></Input>
                    <ButtonHome name='Submit' bgcolor="var(--pale-orange)}" color="var(--white-two)" mb='80px'></ButtonHome>
                    <div style={{textAlign: 'center'}}>
                        <p style={{display:"inline-block" ,fontSize: "14px", color:"var(--dark-grey)"}}>I remember my password now.</p>
                        <Link color='var( --pumpkin-orange)' text='Log In' fontWeight='bold'></Link>
                    </div>
                </styled.ForgotContainer>
            </styled.ForgotCard>
        </>
    );
}
 
export default ForgotPass;