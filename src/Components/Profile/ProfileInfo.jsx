import React from 'react';
import * as styled from './Profile.styled';
import Input from '../Input/Input';
import Button from '../Button/Button';
const ProfileInfo = () => {
    return ( 
        <styled.ProfileInfo>
            <div className="Profile_Editor">
                        <div className="Profile_Editor_title">
                            <h4>Infomation</h4>
                            <div className="Edit">Edit</div>
                        </div>
                        <div className="Profile_Editor_form">
                            <div className="name" style={{margin:'26px 0 31px 0'}}>
                                <div style={{color:'var(--dark-grey)'}}>Name</div>
                                <div>{localStorage.getItem('name')}</div>
                            </div>
                            <div className="email">
                            <div style={{color:'var(--dark-grey)'}}>Email</div>
                                <div>{localStorage.getItem('user')}</div>
                            </div>
                        </div>
                        
            </div>
        </styled.ProfileInfo>
    );
}
 
export default ProfileInfo;