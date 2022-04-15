import styled from 'styled-components';
import { width } from '@mui/system';
export const ShoppingCart = styled.div`
    height: 712px; /*làm sao để đẩy xuống*/
    width: 1260px;
    margin: 0 auto;
    padding: 37px 0 53px 0px;
    text-align:left;
    h1{
        margin: 0;
        width: 92px;
        height: 32px;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
    .cartContainer{
        width: 1260px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .cart_list{
            width: 860px;
            margin-top: 36px;
            .cart_list_name{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                div:nth-child(1){
                    margin-right:229.3px;
                }
                div:nth-child(2) ~ div{
                    margin-left:104px;
                }
                div:nth-child(4) + div{
                    margin-left:200px;
                }
            }
        }
        .cart_total{
            width: 330px;
            margin-top: 36px;
            .cart_total_box{
                padding: 32px 0 24px 0;
                width: 330px;
                height: 148px;
                background:#f9f9f9;
                hr{
                    width: 271px;
                    height: 3px;
                    border: solid 0.5px var(--brown-grey);
                }
            }
            .cart_total_box_price{
                margin: 0 30px 0 30px;
                display: flex;
                justify-content: space-between;
                height: 22px;
                font-family: Montserrat;
                font-size: 14px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.57;
                letter-spacing: normal;
                color: var(--dark-grey);
                p{
                    margin: 0;
                    
                }

            }
        }

    }
    .cart_title{
        text-align: left;
        width: 36px;
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
`
export const cartListItem = styled.div`
    height: 132.5px;
    width: 860px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(1){
        margin-right:0;
        display: flex;
        justify-content: space-between;
        img{
            height: 113px;
            width: 80px;
            object-fit: cover;
            object-position: top;
        }
        .cartListTitle{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-right: 0;
            div{
                width: 100px;
                margin: 0;
                font-family: Montserrat;
                font-size: 14px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: normal;
                color: var(--dark-grey);
            }
            button{
                border: none;
                background: white;
            }
            button:hover{
                cursor: pointer;
                background: #f9f9f9;
            }
        }

    }
   
    div:nth-child(2){
        margin-left: 35px;
    }
    .Size{
        margin-left:112px;
        width: 12px;
        height: 26px;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        color: var(--dark-grey);
    }
    .Amount{
        margin-left:132px;
        width: 55px;
        height: 24px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        text-align: right;
        color: var(--dark-grey);
    }
   
    }
`
export const Quantity = styled.button`
    margin-left:97px;
    width: 108px;
    height: 42px;
    border: solid 1px var(--white-four);
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        outline: 0;
        border: none;
        font-size: 23px;
        color: var(--dark-grey);
        font-weight: normal;
    }
    button:hover{
        cursor: pointer;
        opacity: 0.5;
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