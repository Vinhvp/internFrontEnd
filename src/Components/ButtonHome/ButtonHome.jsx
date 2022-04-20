import React from 'react';
import * as styled from './ButtonHome.styled'
const ButtonHome = (props) => {
    
    return ( 
        <>
            <styled.Button error= {props.error} mt={props.mt} mb={props.mb}>
                {props.name}
            </styled.Button>
        </>
    );
}
ButtonHome.defaultProps ={
    type: "submit"

}
export default ButtonHome;