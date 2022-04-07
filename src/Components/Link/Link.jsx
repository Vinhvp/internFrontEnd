import React from 'react';
import * as styled from './Link.styled';
const Link = (props) => {
    return ( 
        <>
            <styled.LinkT href="#" sized={props.size} color={props.color} fontWeight={props.fontWeight}>
                {props.text}
                
            </styled.LinkT>
        </>
     );
}
Link.defaultProps = {
    href:'#',
    textDecor: 'underline',
    sized:'12px',
    color:'black',
    fontWeight:'normal',
    text:'bạn chưa điền'
}
export default Link;