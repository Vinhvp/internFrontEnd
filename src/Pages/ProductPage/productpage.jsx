import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/HomeContent/Content';
import Footer from '../../Components/Footer/Footer';
import ProductBranch  from '../../Components/ProductBranch/ProductBranch';
import {tool} from '../../App';
import {useState, createContext, useEffect,useContext} from "react";


const Product = (props) => {
    return ( 
        <>
            
            <ProductBranch searchValue = {props.searchValue}></ProductBranch>
          
        </>
    );
}
 
export default Product;