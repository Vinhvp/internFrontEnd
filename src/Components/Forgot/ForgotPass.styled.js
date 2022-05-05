import styled from 'styled-components';

export const ForgotCard = styled.div`
    margin: 200px auto;
    width: 555px;
    height: 420px;
    background-color: var(--white);
`
export const ForgotContainer = styled.div`
    padding-top: 9px;
    width: 395px;
    margin: 0 auto;
    .buttonForgot{
        margin-top: 50px;
        font-size: 16px;
        text-align: center;
        font-family:"Montserrat";
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: center;
        border: 0; 
        width: 395px;
        height: 49px;
        box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.12);
        cursor: pointer;
        background: var(--pale-orange);
        color:var(--white-two); 
    }
    .email{
        text-align: left;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
    .inputForgot{
        background-color: var(--white-two);
        padding: 0 8px;
        width: 395px;
        height: 46px;
        border: none;
        &::placeholder{
        opacity: 0.3;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: var(--greyish-brown);
    }  
    }
    h1{
        width: 284px;
        height: 42px;
        margin: 42px 135px 7px 55px;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: center;
        color: var(--dark-grey);
    }
    p{
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.83;
        letter-spacing: normal;
        text-align: center;
        color: #808080;
    }
`

