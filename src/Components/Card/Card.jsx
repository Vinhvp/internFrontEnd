import StyledEngine from '@mui/styled-engine';
import React from 'react';
import * as styled from './Card.styled';
const Card = (props) => {
    return ( 
        <>
        <styled.Card>
            
            <img src={props.img} alt="" />
            <h6><a href='#'>{props.title}</a></h6>
            <div>{props.price}</div>

        </styled.Card>
        
        </>
     );
}
 
export default Card;