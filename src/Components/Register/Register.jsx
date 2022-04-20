import React, {useState} from 'react';
import * as styled from './Register.styled';
import Input from '../Input/Input';
import Link from '../Link/Link';
import ButtonHome from '../ButtonHome/ButtonHome';
const Register = (props) => {
    const [error,setError] = useState({
        NAME: true,
        EMAIL: true,
        PASSWORD: true
    });
    return ( 
        <>
            <styled.RegisterCard>
                <h1 style={{marginTop: "47px"}}>Register</h1>
                <styled.Container>
                    <form>
                        <Input setError={setError} label="NAME" name="name" placeholder="Enter your name..." mb="24px"></Input>
                        <Input setError={setError} type='email' label="EMAIL" name="email" placeholder="aware@example.com" mb="24px"></Input>
                        <Input setError={setError} type="password" label="PASSWORD" name="password" placeholder="Enter your password..." mb="26px"></Input>
                        <styled.Text>
                        
                            <p style={{display: "block"}}>By creating an account you agree to the</p>
                            <Link style={{display: "inline-block"}} text="Terms or Services " size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link><p style={{display: "inline-block"}}>and</p><Link text="Privacy Policy" size="14px" color="var(--pumpkin-orange)" fontWeight="bold"></Link>


                        </styled.Text>
                        <ButtonHome error={error} name="Register" color='var(--white-two)' mt='51px' mb='70px'></ButtonHome>
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