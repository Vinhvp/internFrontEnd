import React from 'react';
import * as styled from './Profile.styled';
import Button from '../Button/Button';
const Profile = (props) => {
    return ( 
        <>
        <styled.ProfileEditor display={props.display}>
            <div className="Profile_Editor">
                        <div className="Profile_Editor_title">
                            <h4>Infomation</h4>
                            <div className="Edit">Edit</div>
                        </div>
                        <div className="Profile_Editor_form">
                            <div className="name" style={{margin:'26px 0 31px 0'}}>
                                <div style={{color:'var(--dark-grey)'}}>Name</div>
                                <div>Vo Phu Vinh</div>
                            </div>
                            <div className="email">
                            <div style={{color:'var(--dark-grey)'}}>Email</div>
                                <div>vinhvp@dgroup.co</div>
                            </div>
                        </div>
                        
            </div>
        </styled.ProfileEditor>
        <styled.ProfileEditor1>
            <div className="Profile_Editor" display={props.display}>
                        <div className="Profile_Editor_title">
                            <h4>Infomation</h4>
                        </div>
                        <div className="Profile_Editor_form">
                            <form>
                                <div className="name">
                                    <b>NAME</b>
                                    <input type="text" />
                                </div>
                                <div className="email">
                                    <b>EMAIL</b>
                                    <input type="text" />
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
 
export default Profile;