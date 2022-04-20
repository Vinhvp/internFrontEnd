import React from 'react';
import * as styled from './Profile.styled';
import ProfileChange from './ProfileChange';
import ProfileInfo from './ProfileInfo';
import ProfileEditor1 from './ProfileEditor';
import Button from '../Button/Button';
import Input from '../Input/Input';
const Profile = (props) => {
    return ( 
        <>
            {/* <ProfileInfo></ProfileInfo> */}
            <ProfileChange></ProfileChange>
            {/* <ProfileEditor1></ProfileEditor1> */}
        </>
     );
}
 
export default Profile;