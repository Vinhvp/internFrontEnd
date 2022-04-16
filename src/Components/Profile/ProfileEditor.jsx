import React from 'react';
import * as styled from './Profile.styled';
import Input from '../Input/Input';
import Button from '../Button/Button';
const ProfileEditor1 = () => {
    return ( 
        <>
        <styled.ProfileEditor1>
            <div className="Profile_Editor" >
                        <div className="Profile_Editor_title">
                            <h4>Infomation</h4>
                        </div>
                        <div className="Profile_Editor_form">
                            <form>
                                <div className="nameEmail">
                                    <Input type='text' placeholder='Enter your name..' label='NAME'/>
                                    <Input type='EMAIL' placeholder='aware@example.com' label='EMAIL'/>
                                </div>
                                <div className='button'>
                                    <Button name='Cancel' w='120px' h='35px' color='var(--dark-grey)'></Button>
                                    <Button name='Save' w='120px' h='35px' bgcolor='var(--white-four)' color='var(--white)'></Button>
                                </div>
                            </form>
                        </div>
                        
            </div>
        </styled.ProfileEditor1>
        </>
     );
}
 
export default ProfileEditor1;