import styled from 'styled-components';
import { width } from '@mui/system';
import { MenuItem } from '@mui/material/MenuItem';
export const ProductDetails = styled.div`
    display: block;
    width: 1260px;
    height: 1912px;
    text-align: center;
    margin: 0 auto;
    p{
        margin: 40px 78px 45px 0;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: center;
        color: var(--dark-grey);
    }
`
export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`
export const Detail1 = styled.div`
    width: 80px;
    height: 537px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-right: 21px;
    div{
        width: 80px;
        height: 116px;
        margin-bottom: 25px;
        
        img{
            object-fit: cover;
            width: 100%;
            height: 116px;
        }
    }
`
export const Detail2 = styled.div`
    width: 1076px;
    height: 550px;
    display: flex;
    flex: 1;
    img{
        height: 540px;
        width: 379px;
        object-fit: cover;
    }
    div{
        margin-left: 71px;
        text-align: left;
        h1{
            width: 378px;
            height: 32px;
            margin: 0 51px 0 0px;
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
        span{
            width: 80px;
            height: 32px;
            font-family: Montserrat;
            font-size: 24px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
        div{
            margin: 13px 0 26px 0;
            width: 250px;
            p{
                margin: 0 0 0 11px; 
                padding-left: 9px;
                display: inline-block;
                font-family: Montserrat;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.83;
                letter-spacing: normal;
                color: var(--dark-grey);
                border-left: solid 0.5px var(--brown-grey);
            }
        }
        b{
            width: 29px;
            height: 22px;
            margin: 0 27px 9px 0;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.57;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
        section{
            font-family: Montserrat;
            margin: 0;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.83;
            letter-spacing: normal;
            color: var(--dark-grey);
            div{
                margin: 0;
            }
        }
        
    }

`
export const Detail3 = styled.div`
    text-align: left;
    width: 80px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: 'flex-start';
    align-items: 'center';
    div{
        width: 80px;
        height: 114px;
        margin-bottom: 10px;
        img{
            width:100%;
            object-fit: cover;
            height: 114px;
        }
        span{
            font-family: Montserrat;
            width: 80px;
            height: 22px;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.57;
            letter-spacing: normal;
            color: var(--dark-grey);
        }
    }
`

export const Size = styled.button`
    border: 0;
    cursor: pointer;
    padding-top: 3px;
    position: relative;
    width: 40px;
    height: 40px;
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
export const Quantity = styled.button`
    width: 108px;
    height: 42px;
    border: solid 1px var(--white-four);
    margin-left: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        outline: 0;
        border: none;
        cursor: pointer;
        font-size: 23px;
        color: var(--dark-grey);
        font-weight: normal;
    }
    h5{
        width: 9px;
        height: 22px;
        margin: 1px 15.5px 1px 17.5px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: center;
        color: var(--dark-grey);
    }
`
export const ReviewTable = styled.div`
    margin: 62px 0 0 0;
    border-top: solid 0.5px var(--brown-grey);
    position: relative;
    nav{
        position: absolute;
        width: 100px;
        height: 24px;
        transform: translate(80px,-15px);
        background: var(--white);
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
    .bread{
            position: absolute;
            bottom: -49px;
            right: 190px;
            background: var(--white)
        }
    .bread_top{
        position: absolute;
        top: 15px;
        right: 190px;
        background: var(--white)
    }
`
export const Review = styled.div`
    width: 1058px;
    height: 764px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    section{
        position: relative;
        text-align: left;
        height: 341px;
        width: 1058px;
        display: flex;
        /* border-bottom: solid 0.5px var(--pinkish-grey); */
        padding-bottom: 15px;
        div{
            width: 830px;
            margin-left: 121px;
            background: #f9f9f9;
            form{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                input{
                    width: 770px;
                    border: none;
                    box-shadow: inset 1px 1px 3px 0 rgba(159, 159, 159, 0.26);
                    background-color: var(--white);
                    padding: 0 10px 0 10px;
                }
                input:nth-child(1){
                    height: 45px;
                    margin: 21px 0 9px 0;
                }
                input:nth-child(2){
                    height: 157px;
                    margin: 0px 0 15px 0;
                }
                input::placeholder {
                    font-family: Montserrat;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.57;
                    letter-spacing: normal;
                    color: var(--greyish-two);
                }
                input:nth-child(2)::placeholder {
                    transform: translateY(-50px);
                }
                div{
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    margin: 0;
                    width: 765px;
                    div{
                        span{
                            font-family: Montserrat;
                            font-size: 14px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.57;
                            letter-spacing: normal;
                            color: #808080;
                        }
                    }
                }
            }
        }
    }
`

export const breadcrumbs = styled.div`
    padding-right: 3px;
    width: 111px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 52px;
        height: 22px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: normal;
        text-align: center;
        color: var(--dark-grey);
    }
`
export const RecommendList = styled.div`
    border-top: solid 0.5px var(--brown-grey);
    margin-top: 81px;
    width: 1260px;
    padding-top: 30.9px;
    height: 326px;
    position: relative;
    nav{
        position: absolute;
        transform: translate(84px,-53px);
        width: 170px;
        height: 24px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
        background: white;
        padding: 10px;
    }
    .RecommendList{
        display: flex;
        width: 1260px;
        overflow: hidden;
        flex-direction: row;
        justify-content: flex-start;
    }
`
export const RecommendItem = styled.li`
    list-style: none;
    margin-right: 20px;
    text-align: left;
    img{
        margin-bottom: 2.8px;
        object-fit: cover;
        width: 140px;
        height: 226px;
        object-position: top;
    }
    div{
        width: 130px;
        height: 32px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: var(--greyish-brown);
    }

`