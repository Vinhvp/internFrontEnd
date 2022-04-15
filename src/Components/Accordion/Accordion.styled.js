import styled from 'styled-components';
export const AccordionContainer = styled.div`

`
export const Size = styled.button`
    border: 0;
    cursor: pointer;
    padding-top: 3px;
    position: relative;
    width: 30px;
    height: 30px;
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
    margin-right: 15px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
`
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