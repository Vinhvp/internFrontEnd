import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/HomeContent/Content';
import Footer from '../../Components/Footer/Footer';
import ProductBranch  from '../../Components/ProductBranch/ProductBranch';
const Product = (props) => {
    
    return ( 
        <>
            
            <ProductBranch searchValue = {props.searchValue}></ProductBranch>
          
        </>
    );
}
 
export default Product;