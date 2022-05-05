import React, { useState } from 'react';
import * as styled from './Profile.styled';
import Input from '../Input/Input';
import Button from '../Button/Button';

const axios = require('axios');
const ProfileChange = () => {
    const [resetPassword, setResetPassword] = useState({
        oldPassword: '',
        newPassword: ''
    });
    const onGetOldPassword = (e) => {
        setResetPassword( prev => {
            return {...prev, oldPassword: e.target.value}
        })
    } 
    const onGetNewPassword = (e) => {
        setResetPassword( prev => {
            return {...prev, newPassword: e.target.value}
        })
    } 
    console.log(resetPassword);
    const onSave = (e)=>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:7000/account/editAccount/',
            data: {
                user: localStorage.getItem('user'),
                oldPasswords: resetPassword.oldPassword,
                newPasswords: resetPassword.newPassword
            }
        })
        .then((res)=>{
            console.log(res);
            if(res.data.password == 'true'){
                alert('You has changed successful your password !!')
            }else{
                alert('Wrong password, please try again !!')
            }
        })
        }
    
    return ( 
        <styled.ProfileChange>
            <div className="Profile_Change">
                        <div className="Profile_Change_title">
                            <h4>Infomation</h4>
                        </div>
                        <div className="Profile_Change_form">
                            <form>
                                <div className="nameEmail">
                                    <Input type='email' placeholder={localStorage.getItem('user')} label='EMAIL' disable='disable'/>
                                    <p>CURRENT PASSWORD</p>
                                    <input onChange={onGetOldPassword} type="password" placeholder='Enter your old password..' label='CURRENT PASSWORD' />
                                    <p>PASSWORD</p>
                                    <input onChange={onGetNewPassword} type='password' placeholder='Enter your password..' label='PASSWORD' />
                                </div>
                                <div className='buttonBox'>
                                    <Button name='Cancel' w='120px' h='35px' color='var(--dark-grey)'></Button>
                                    <Button onClick={onSave} name='Save' w='120px' h='35px' bgcolor='var(--white-four)' color='var(--white)'></Button>
                                </div>
                            </form>
                        </div>
            </div>
        </styled.ProfileChange>
     );
}
 
export default ProfileChange;