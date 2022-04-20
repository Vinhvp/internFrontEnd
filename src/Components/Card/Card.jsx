import StyledEngine from '@mui/styled-engine';
import React from 'react';
import * as styled from './Card.styled';
const Card = (props) => {
    return ( 
        <>
        <styled.Card href={props.href}>
            
            <img src={props.img} alt="" />
            <h6>{props.title}</h6>
            <div>{props.price}</div>

        </styled.Card>
        
        </>
     );
}
 
export default Card;