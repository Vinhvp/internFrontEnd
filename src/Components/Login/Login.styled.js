import styled from 'styled-components';

export const LoginCard = styled.div
`  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 555px;
    height: 550px;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.03);
    background-color: var(--white);
    h1{
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

`

export const Email = styled.div``
export const Password = styled.div``
export const Checkbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: var(--greyish-brown);
    }
`
export const Container = styled.div`
    width: 395px;
    margin: 0 auto;
`

export const Button = styled.button`
    margin-top: 46px;
    margin-bottom: 92px;
    font-family:"Montserrat";
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: var(--white-two);
    text-align: center;
    border: 0; 
    width: 395px;
    height: 49px;
    background-color: var(--white-four);
`