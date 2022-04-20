import styled from 'styled-components';

export const Input = styled.input`
    padding: 0 8px;
    width: 395px;
    height: 46px;
    border: ${(props)=> props.error ? '1px solid var(--strawberry)': 'none'};
    background-color: var(--white-two);  
`

export const InputContainer = styled.div`
    p{  
        position: absolute;
        margin: 0;
        left: 0px;
        bottom: -16px;
        font-size: 10px;    
        font-weight: 500;
        color: var(--strawberry);
    }
    position: relative;
    margin-bottom: ${props=>props.mb};
    margin-top: ${props=>props.mt};
    display: flex;
    flex-direction: column;
    label{
        font-family: Montserrat;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
`