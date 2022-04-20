
import styled from 'styled-components';
export const FooterContainer = styled.div`
    display: block;
    height: 185px;
    padding: 0 129px;
    background-color: var(--white);
`
export const FooterLogo = styled.img`
    width: 96px;
    height: 20px;
    object-fit: contain;
`
export const FooterContact = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 52px 0;
`
export const FooterList = styled.ul`
    padding-left: 0px;
    display: block;
` 
export const FooterLi = styled.li`
    display: inline-block;
    margin-left: 22px;
    &:nth-child(1) {
        margin-left: 0;
    }
` 
export const FooterItem = styled.a`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
    color: var(--greyish-two);
    cursor:pointer;
` 
export const FooterSocial = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
        margin-left: 15px;
    }
`
export const FooterBotSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #ececec;
`
export const FooterTerm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div{
        margin-left: 15px;
        opacity: 0.4;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.83;
        letter-spacing: normal;
        text-align: right;
        color: var(--dark-grey);
    }
`