import React from 'react';
import * as styled from './Profile.styled';
import Input from '../Input/Input';
import Button from '../Button/Button';
const ProfileChange = () => {
    return ( 
        <styled.ProfileChange>
            <div className="Profile_Change">
                        <div className="Profile_Change_title">
                            <h4>Infomation</h4>
                        </div>
                        <div className="Profile_Change_form">
                            <form>
                                <div className="nameEmail">
                                    <Input type='password' placeholder='Enter your old password..' label='CURRENT PASSWORD'/>
                                    <Input type='password' placeholder='Enter your password..' label='PASSWORD'/>
                                    <Input type='email' placeholder='aware@example.com' label='EMAIL'/>
                                </div>
                                <div className='button'>
                                    <Button name='Cancel' w='120px' h='35px' color='var(--dark-grey)'></Button>
                                    <Button name='Save' w='120px' h='35px' bgcolor='var(--white-four)' color='var(--white)'></Button>
                                </div>
                            </form>
                        </div>
            </div>
        </styled.ProfileChange>
     );
}
 
export default ProfileChange;