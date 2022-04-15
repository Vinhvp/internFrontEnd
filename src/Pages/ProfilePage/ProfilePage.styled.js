import styled from 'styled-components';
import { width } from '@mui/system';
export const Profile = styled.div`
    width: 678px;
    height: 267px;
    display: flex;
    justify-content: space-between;
    margin: 37px 0  0 130px;
    .Profile_Setting{
        width: 146px;
        h2{
            margin: 0;
            padding: 0;
            width: 146px;
            height: 32px;
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: var(--dark-grey);
            margin-bottom: 33px;
        }
        
        
    }
    .Profile_Editor{
       
        width: 430px;
        display: flex;
        flex-direction: column;
        &_title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h4{
                margin: 0;
                width: 88px;
                height: 22px;
                font-family: Montserrat;
                font-size: 14px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.57;
                letter-spacing: normal;
                color: var(--dark-grey);
            }
            .Edit:hover{
                opacity: 0.5;
                cursor: pointer;
            }
        }
        &_form{
            width: 430px;
            height:191px;
            background: #f9f9f9;
            margin-top: 13px;
            div{
                padding-left: 50px;
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
    }

`
export const active = styled.span`
    margin-bottom: 18px;
    width: 114px;
    height: 22px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: ${props => props.color ? 'var(--pale-orange)' : 'var(--greyish-brown)'};
    cursor: pointer;
    user-select: none;


`
export const dactive = styled.span`
    margin-bottom: 18px;
    width: 114px;
    height: 22px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: ${props => props.color ? 'var(--greyish-brown)' : 'var(--pale-orange)'};
    cursor: pointer;
    user-select: none;


`