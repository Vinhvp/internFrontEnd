import React from 'react';
import * as styled from './ButtonHome.styled'
const ButtonHome = (props) => {
    return ( 
        <>
            <styled.Button mt={props.mt} mb={props.mb} bgcolor={props.bgcolor} color={props.color}>
                {props.name}
            </styled.Button>
        </>
    );
}
ButtonHome.defaultProps ={
    bgcolor: "var(--white-two)",
    color: "var(--dark-grey)",
    type: "submit"

}
export default ButtonHome;