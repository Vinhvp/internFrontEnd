import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as Styled from "./Header.styled";
import Modal from '@mui/material/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Header = () => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
        return (
            <div>
                <Styled.HeaderNav>
                    <Styled.SearchBox>
                        <Styled.Input placeholder='Search' className=''/>
                        <SearchIcon />
                    </Styled.SearchBox>
                    <Styled.Logo src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"/>       
                    <Styled.Login>
                        <div style={{cursor:'pointer'}} onClick={handleOpenRegister}>Register</div>
                    <Modal 
                        open={openRegister}
                        onClose={handleCloseRegister}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                      <div><Register/></div> 
                    </Modal>
                    <Styled.Loginbutton>
                        <div onClick={handleOpenLogin}>Login</div>
                    </Styled.Loginbutton> 
                    <Modal 
                        open={openLogin}
                        onClose={handleCloseLogin}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                      <div><Login/></div> 
                    </Modal>

                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon style={{color: 'black'}}/>
                        </Badge>
                    </Styled.Login>
    
                </Styled.HeaderNav>
                <Styled.Navbar>
                        <Styled.NavbarItem>
                            <Styled.NavbarItemDiv>Men</Styled.NavbarItemDiv>
                            <ArrowDropDownIcon style={{cursor:'pointer'}}/>
                        </Styled.NavbarItem>
                        <Styled.NavbarItem>
                            <Styled.NavbarItemDiv>Ladies</Styled.NavbarItemDiv>
                            <ArrowDropDownIcon style={{cursor:'pointer'}}/>
                        </Styled.NavbarItem>
                        <Styled.NavbarItem>
                            <Styled.NavbarItemDiv >Girls</Styled.NavbarItemDiv>
                            <ArrowDropDownIcon style={{cursor:'pointer'}}/>
                        </Styled.NavbarItem>
                        <Styled.NavbarItem>
                            <Styled.NavbarItemDiv >Boys</Styled.NavbarItemDiv>
                            <ArrowDropDownIcon style={{cursor:'pointer'}}/>
                        </Styled.NavbarItem>
                </Styled.Navbar>
            </div>
        );
}

 
export default Header;