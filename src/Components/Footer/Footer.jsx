import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import * as styled from './Footer.styled'
import { Routes, Route, Link } from "react-router-dom";
const Footer = () => {
    return (
       <>
        <styled.FooterContainer>
                <styled.FooterContact>
                <Link to='/'><styled.FooterLogo src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"/></Link>      
    
                    <styled.FooterList>
                        <styled.FooterLi>
                            <Link style={{ textDecoration: 'none' }} to ='/'><styled.FooterItem>Home</styled.FooterItem></Link>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <Link style={{ textDecoration: 'none' }} to ='/product'><styled.FooterItem>Product</styled.FooterItem></Link>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <Link style={{ textDecoration: 'none' }} to ='/product'><styled.FooterItem>Services</styled.FooterItem></Link>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <Link style={{ textDecoration: 'none' }} to ='/product'><styled.FooterItem>About us</styled.FooterItem></Link>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <Link style={{ textDecoration: 'none' }} to ='/help'><styled.FooterItem>Help</styled.FooterItem></Link>
                        </styled.FooterLi>
                        <styled.FooterLi>
                        <Link style={{ textDecoration: 'none' }} to ='/contacts'><styled.FooterItem>Contacts</styled.FooterItem></Link>
                        </styled.FooterLi>
                    </styled.FooterList>
                    <styled.FooterSocial>
                        <div><TwitterIcon style={{color: "Aquamarine"}}/></div>
                        <div><FacebookIcon style={{color: "Blue"}}/></div>
                        <div><InstagramIcon style={{color: "LightCoral"}}/></div>
                    </styled.FooterSocial> 
                </styled.FooterContact>
                <styled.FooterBotSide>
                    <styled.FooterList>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}>Home</styled.FooterItem>
                            </styled.FooterLi>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}>Products</styled.FooterItem>
                            </styled.FooterLi>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}>Services</styled.FooterItem>
                            </styled.FooterLi>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}>About us</styled.FooterItem>
                            </styled.FooterLi>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}>Help</styled.FooterItem>
                            </styled.FooterLi>
                            <styled.FooterLi>
                                <styled.FooterItem style={{fontSize: "12px"}}> Contacts</styled.FooterItem>
                            </styled.FooterLi>
                    </styled.FooterList>
                    <styled.FooterTerm>
                        <div>Privacy Policy</div>
                        <div>Terms {"&"} Conditions</div>
                    </styled.FooterTerm>
                </styled.FooterBotSide>
        </styled.FooterContainer>
       </>
    );
}

export default Footer;