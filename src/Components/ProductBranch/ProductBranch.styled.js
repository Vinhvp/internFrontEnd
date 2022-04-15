import styled from 'styled-components';
import { Popper } from '@mui/material/Popper';

export const ProductBranch = styled.div`
    display: block;
    width: 1278px;
    height: 1685px;
    text-align: center;
    margin: 0 auto;
    p{
        margin: 54px 78px 45px 0;
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
export const ProductContainer = styled.div`
    width: 1278px;
    height:1500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
`
export const ProductLeftBar = styled.div`
    width: 201px;
    h3{
        font-family: Montserrat;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: var(--dark-grey);
        text-align: left;
    }
    p{
        text-align: left;
        margin-bottom: 18px;
        margin-top: 29px;
    }
    a{
        text-align: left;
       
        margin: 0;
        text-decoration: none;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.57;
        letter-spacing: -0.1px;
        color: var(--greyish-brown);
    }
    ul{
        text-align: left;
        padding: 0;
    }
    li{
        margin-top: 18px;
        list-style: none;
    }
    hr{
        width: 101px;
        margin: 54px 0px 47.9px 0px;
        border: solid 0.5px var(--brown-grey);
    }

`
export const ProductList = styled.div`
    width: 1077px;
   div{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
export const ProductItem = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 180px;
    align-items: space-between;
    justify-content: flex-start;
    flex-direction: row;
    div{
        width: 180px;
        height: 345px;
        margin: 0 0 15px 0;
        flex-basis: 202px; 
    }
`