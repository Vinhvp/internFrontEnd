import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as Styled from "./Header.styled";


class Header extends React.Component {
  constructor(props){
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
                <Styled.HeaderNav>
                    <Styled.SearchBox>
                        <Styled.Input placeholder='Search' className=''/>
                        <SearchIcon />
                    </Styled.SearchBox>
                    <Styled.Logo src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"/>       
                    <Styled.Login>
                        <div>Register</div>
                        <Styled.Loginbutton>
                            <div style={{color:"var(--pale-orange)", fontWeight:"bold", textAlign:"center"}}>Login</div>
                        </Styled.Loginbutton> 
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
}
 
export default Header;