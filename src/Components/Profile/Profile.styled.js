import styled from 'styled-components';
export const ProfileInfo = styled.div`

.Profile_Editor{
    width: 430px;
    height: 710px;
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
        background: var(--white-four);
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
        height: 710px;
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
            .nameEmail{
               padding: 26px 0 0 0px;
                input{
                    margin-bottom: 33px;
                }
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
            input::placeholder{
                width: 156px;
                height: 22px;
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
}

`
export const ProfileChange = styled.div`
   
    .Profile_Change{
        width: 430px;
        height: 710px;
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
            position: relative;
            width: 481px;
            height:401px;
            background: linear-gradient(90deg, var(--white-four), grey);
            padding-left: 50px;
            .nameEmail{
                p{
                    font-family: Montserrat;
                    font-size: 12px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    color: var(--dark-grey);}
                    margin: 26px 0 0 0;
                    padding: 0;
                input{
                    padding: 0 8px;
                    width: 395px;
                    height: 46px;
                    background: var(--white-four);
                    border: 0;
            
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
            }
           .buttonBox{
               position: absolute;
               right: 36px;
               bottom: 60px;
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