import styled from 'styled-components';

export const InputT = styled.input`
    width: 395px;
    height: 46px;
    border: 0;
    background-color: var(--white-two);
    &:focus{
        box-shadow: 0 0px 3px 0px var(--pumpkin-orange);
        outline: 0;
    }

`

export const InputContainer = styled.div`
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