import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import * as styled from './verify.styled';
const axios = require('axios');


const Verify = (props) => {
    
    const sendVerify = (e) =>{
        e.preventDefault();
        axios({
            method: 'post',
            url:'http://localhost:7000/account/verify/'+localStorage.getItem('register'),
            data: {
                email: localStorage.getItem('register'),
                verify: 'true'
            }
        })
        .then((res)=>{
            console.log(res.status);
            alert(`email: ${localStorage.getItem('register')} xác nhận thành công!!`)
            window.location.replace("http://localhost:3000");
        })
    }
    return ( 
        <>
          <div style={{margin: '0 auto', width: '500px', height: '300px', background:'linear-gradient(0deg, #fad961cc 0%, #f76b1cdd 100%)',
        borderRadius: '15px', textAlign: 'center'}}>
                   <img style={{width: '300px', padding: '40px 0'}} src="https://cdn.zeplin.io/5b6909753dbbb6686782615a/assets/CF9525DD-66CA-4FAB-91EB-E2478E84A39E.svg"></img>
                 <button onClick={sendVerify} style={{fontSize: '18px',
       position: 'relative',
       padding: '0.8em 1.5em',
       border: 'none',
       color: 'white',
       transition: '0.2s',
       textDecoration: 'none',
       border:' white solid 1px',
       textTransform: 'uppercase',
       letterSpacing: '1px',background:' #b22234'}}><a href='http://localhost:3000/' style={{color: 'white', textDecoration: 'none'}}>Click to verify your account</a></button>
       <h5>If the above link does not work, copy and paste this URL into your browser: </h5>
       <h5><a onClick={sendVerify} href="http://localhost:3000/">Click Here</a></h5>
             </div>
        
        </>

     );
}
 
export default Verify;