import React  from 'react';
import {HomeContainer,Banner,BannerChild1,BannerChild2,BannerChild3,
    BannerChild4,Button,TitleBanner,
    TitleBannerChild, Overlay} from "./Content.styled";
import {Link} from "react-router-dom";

const HomeContent = () => {
    return (
       <>
        <HomeContainer>
            <Banner>
                <TitleBanner>OUTFIT OF THE WEEK</TitleBanner>
                <Button style={{bottom: '55px', right: '83px'}}>Shop Now</Button>
            </Banner>
                <BannerChild1>
                    <Overlay></Overlay>
                   <TitleBannerChild>Men</TitleBannerChild>
                    <Button style={{bottom: '24px', right: '70px'}}><Link className='linkShop' to='/category?name=men'>Shop Now</Link></Button>
                </BannerChild1>
            <BannerChild2>
                <Overlay></Overlay>
                <TitleBannerChild>Ladies</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}><Link className='linkShop' to='/category?name=ladies'>Shop Now</Link></Button>
            </BannerChild2>
            <BannerChild3>
                <Overlay></Overlay>
                <TitleBannerChild>Girls</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}><Link className='linkShop' to='/category?name=girls'>Shop Now</Link></Button>
            </BannerChild3>
            <BannerChild4>
                <Overlay></Overlay>
                <TitleBannerChild>Boys</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}><Link className='linkShop' to='/category?name=boys'>Shop Now</Link></Button>
            </BannerChild4>
        </HomeContainer>

       </>
    );
}

export default HomeContent;