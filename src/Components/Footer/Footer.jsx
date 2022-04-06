import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import * as styled from './Footer.styled'
const Footer = () => {
    return (
       <>
        <styled.FooterContainer>
                <styled.FooterContact>
                    <styled.FooterLogo src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"/>
    
                    <styled.FooterList>
                        <styled.FooterLi>
                            <styled.FooterItem>Home</styled.FooterItem>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <styled.FooterItem>Products</styled.FooterItem>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <styled.FooterItem>Services</styled.FooterItem>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <styled.FooterItem>About us</styled.FooterItem>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <styled.FooterItem>Help</styled.FooterItem>
                        </styled.FooterLi>
                        <styled.FooterLi>
                            <styled.FooterItem>Contacts</styled.FooterItem>
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