import styled from 'styled-components';

export const Button = styled.button`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    font-size: 16px;
    text-align: center;
    font-family:"Montserrat";
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: ${props => props.color};
    text-align: center;
    border: 0; 
    width: 395px;
    height: 49px;
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.12);
    background-color: ${props =>props.bgcolor};
    cursor: pointer;
`