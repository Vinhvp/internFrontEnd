import React,{createContext,useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '../ListPopper/List';
import * as Styled from "./Header.styled";
import Modal from '@mui/material/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Routes, Route, Link,useLocation} from "react-router-dom";
import {useContext} from 'react';
import {tool} from '../../App';
const axios = require('axios');

export const getName = createContext();
const Header = (props) => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);
    const [openRegister, setOpenRegister] = React.useState(false);
    const handleOpenRegister = () => setOpenRegister(true);
    const handleCloseRegister = () => setOpenRegister(false);
    const setValue = useContext(tool)
    const userToken = Boolean(localStorage.getItem('token'));
    const signOut = () =>{
        localStorage.removeItem('user'); 
        localStorage.removeItem('token');
        localStorage.removeItem('product');
        localStorage.removeItem('productLength');
        alert('Sign out successful!!');
        window.location.replace("http://localhost:3000");
    }
    const getValue = (e) => {
       setValue.search((e.target.value));
    }   
        
        return (
            <div>
                          
                
                    <Styled.HeaderNav>
                        <Styled.SearchBox>
                            <Styled.Input onChange={getValue} placeholder='Search' className=''/>
                            <SearchIcon />
                        </Styled.SearchBox>
                        <Link to='/'><Styled.Logo src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"/></Link>      
                        <Styled.Login>
                        {userToken ? <div className='profileImg'><img style={{objectFit:'cover', width:"100%", height:"50px"}} src="https://t.vietgiaitri.com/2020/3/8/tai-sao-qua-khu-bi-tham-cua-gia-dinh-doctor-strange-bi-cat-khoi-bo-phim-chinh-thuc-786-4781355.jpg"></img></div> : <div style={{cursor:'pointer'}} onClick={handleOpenRegister}>Register</div>}
                        <Modal 
                            open={openRegister}
                            onClose={handleCloseRegister}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                          <div><Register/></div> 
                        </Modal>
                        <Styled.Loginbutton>
                            {userToken ? <div onClick={signOut}>Sign Out</div> : <div onClick={handleOpenLogin}>Login</div>}
                        </Styled.Loginbutton> 
                        <Modal 
                            open={openLogin}
                            onClose={handleCloseLogin}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                          <div><Login/></div> 
                        </Modal>
                            
                            <Badge badgeContent={props.badge} color="primary">
                                <Link to='/cart'><ShoppingCartIcon style={{color: 'black'}}/></Link>
                            </Badge>
                        </Styled.Login>
        
                    </Styled.HeaderNav>
                    {/* Thanh NAV dropdown với List component */}
                        <Styled.Navbar> 
                                <Styled.NavbarItem>
                                <Link className='linkName' to="/category?name=men" ><Styled.NavbarItemDiv>Men</Styled.NavbarItemDiv></Link>
                                    <List/>
                                </Styled.NavbarItem>
                                <Styled.NavbarItem>
                                    <Link className='linkName' to="/category?name=ladies" ><Styled.NavbarItemDiv>Ladies</Styled.NavbarItemDiv></Link>
                                    <List/>
                                </Styled.NavbarItem>
                                <Styled.NavbarItem>
                                    <Link className='linkName' to="/category?name=girls" ><Styled.NavbarItemDiv>Girls</Styled.NavbarItemDiv></Link>
                                    <List/>
                                </Styled.NavbarItem>
                                <Styled.NavbarItem>
                                    <Link className='linkName' to="/category?name=boys" ><Styled.NavbarItemDiv>Boys</Styled.NavbarItemDiv></Link>
                                    <List/>
                                </Styled.NavbarItem>
                        </Styled.Navbar>

               
            </div>
    
        );
}

 
export default Header;