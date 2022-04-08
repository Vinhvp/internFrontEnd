import React from 'react';
import * as styled from './Icon.styled'

const Icon = (props) => {
    return ( 
        <>
            <styled.Icons pos={props.pos} left={props.left} top={props.top} right={props.right} bottom ={props.bottom}></styled.Icons>
        </>
     );
}
Icon.defaultProps = {
    pos: "absolute"
}
export default Icon;