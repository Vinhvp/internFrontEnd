import React, {useState} from "react";
import * as styled from './ProfilePage.styled';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/Profile/Profile';
import ProfileChange from "../../Components/Profile/ProfileChange";
import ProfileInfo from "../../Components/Profile/ProfileInfo";
const ProfilePage = () => {
    const [toggleActive, setToggleActive] = useState(true);
    const handleToggle = () =>{
        setToggleActive(()=>{
            return !toggleActive ? true : false;
        })
    }
    return ( 
        <>
            
            <styled.ProfilePage>
                <div className="Profile_Setting">
                    <h2>My Account</h2>
                    <styled.active  onClick={handleToggle} color = {toggleActive} >
                        <div>Account setting</div>

                    </styled.active>
                    <styled.dactive  onClick={handleToggle} color = {toggleActive} >
                        <div>Change password</div>
                    </styled.dactive>

                </div>
                {toggleActive ? (<ProfileInfo></ProfileInfo>) : (<ProfileChange></ProfileChange>)}
               
            </styled.ProfilePage>  
        </>
     );
}
 
export default ProfilePage;