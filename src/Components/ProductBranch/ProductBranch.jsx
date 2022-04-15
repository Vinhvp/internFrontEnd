import React from "react";
import * as styled from './ProductBranch.styled';
import SimpleAccordion from '../Accordion/Accordion';
import SelectLabels from '../SortBy/Sort';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Card from '../Card/Card';
import {data} from './data';


const itemSource = ['Rompers/Jumpsuits', 'Casual dresses', 'Going out dresses', 'Party/Ocassion dresses', 'Mini dresses', 'Maxi/Midi dresses', 'Sets'];
const itemLeftBar = itemSource.map((e)=>{
    return(
        <li><a href='#'>{e}</a></li>
    )
})


const cardData = data.map((e,i)=>{
    return(
        <Card img = {e["img"]} title={e['title']} price={e['price']}/>
    )
});

const ProductBranch = () => {
    
    return ( 
        <>
        
            <styled.ProductBranch>
                <p>Ladies/Dresses</p>
                <styled.ProductContainer>
                    <styled.ProductLeftBar>
                        <h3>Category</h3>
                        <p style={{color: 'var(--bright-orange)'}}>All dresses</p>
                        <ul style={{textAlign: 'left'}}>{itemLeftBar}</ul>
                        <hr></hr>
                        <h3>Filter</h3>
                        <SimpleAccordion />
                    </styled.ProductLeftBar>
                    <styled.ProductList>
                       <div> 
                           <SelectLabels />
                            <styled.breadcrumbs>
                                <ArrowLeftIcon></ArrowLeftIcon>
                                <div>1 / 100</div>
                                <ArrowRightIcon></ArrowRightIcon>
                            </styled.breadcrumbs>
                       </div>
                       <styled.ProductItem>
                          {cardData}
                       </styled.ProductItem>
                    </styled.ProductList>
                </styled.ProductContainer>
            </styled.ProductBranch>
        </>
     );
}
 
export default ProductBranch;