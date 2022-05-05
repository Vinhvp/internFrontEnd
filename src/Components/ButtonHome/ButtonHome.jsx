import React from 'react';
import * as styled from './ButtonHome.styled'
const ButtonHome = (props) => {
    const disable = props.disabled;
    return ( 
        <> {Boolean(disable) ? (<styled.Button onClick={props.onClick} type={props.type} error= {props.error} mt={props.mt} mb={props.mb} disabled>
            {props.name}
        </styled.Button>) : ( <styled.Button onClick={props.onClick} type={props.type} error= {props.error} mt={props.mt} mb={props.mb} >
                {props.name}
            </styled.Button>) }
           
        </>
    );
}
ButtonHome.defaultProps ={
    type: "submit"

}
export default ButtonHome;