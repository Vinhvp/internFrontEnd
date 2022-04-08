import styled from 'styled-components';
export const RegisterCard = styled.div
`  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 555px;
    height: 640px;
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
export const Container = styled.div`
    width: 395px;
    margin: 0 auto;
`
export const Text = styled.div`
    width: fit-content
    height: 44px;
    text-align: center;
    p{

        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 0;
        color: var(--dark-grey);
    }
`