import styled from 'styled-components';
import { width } from '@mui/system';
export const Comment = styled.div`
    border-top: 1px solid var(--pinkish-grey);
    border-bottom: 1px solid var(--pinkish-grey);
    padding-top: 15.9px;
    display: flex;
    height: 180px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    span{
        width: 105px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
    p{
        margin: 0;
        width: 48px;
    }
    div{
        width: 830px;
        height: 149px;
        margin-left: 45px;
        padding: 15px 30px 15px 30px;
    }
    h4{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
        margin: 0;
    }
    article{
        width: 749px;
        height: 86px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: -0.1px;
        color: var(--greyish-brown);
    }
`