import React from 'react';
import Header from '../../Components/Header/Header';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import ForgotPass from '../../Components/Forgot/ForgotPass';

const Home = () => {
    return (  
        <>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
            {/* <Login></Login>  */}
            {/* <Register></Register>  */}
            {/* <ForgotPass></ForgotPass> */}
        </>
    );
}

export default Home;
