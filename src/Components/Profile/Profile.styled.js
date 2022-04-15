import styled from 'styled-components';
export const ProfileEditor = styled.div`
    display: none;
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
        .name{
            margin-top: 26px;
        }
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
export const ProfileEditor1 = styled.div`
.Profile_Editor{
    width: 430px;
    display: flex;
    flex-direction: column;
    &_title{
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
    }
    &_form{
        width: 481px;
        height:303px;
        background: #f9f9f9;
        margin-top: 13px;
        .name{
            margin-top: 26px;
        }
        .name,.email   {
            display: flex;
            flex-direction: column;
            margin-bottom: 33px;
        }
        .button{
            text-align: right;
            margin-right: 50px;
        }
        b{
            width: 39px;
            height: 18px;
            font-family: Montserrat;
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
        input{
            width: 380px;
            height: 46px;
            margin: 0;
            box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.1);
            background-color: var(--white);
        }

    }
}

`