import React from 'react';
import {HomeContainer,Banner,BannerChild1,BannerChild2,BannerChild3,
    BannerChild4,Button,TitleBanner,
    TitleBannerChild, Overlay} from "./Content.styled";
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
                    <Button style={{bottom: '24px', right: '70px'}}>Shop Now</Button>
                </BannerChild1>
            <BannerChild2>
                <Overlay></Overlay>
                <TitleBannerChild>Ladies</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}>Shop Now</Button>
            </BannerChild2>
            <BannerChild3>
                <Overlay></Overlay>
                <TitleBannerChild>Girls</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}>Shop Now</Button>
            </BannerChild3>
            <BannerChild4>
                <Overlay></Overlay>
                <TitleBannerChild>Boys</TitleBannerChild>
                <Button style={{bottom: '24px', right: '70px'}}>Shop Now</Button>
            </BannerChild4>
        </HomeContainer>

       </>
    );
}

export default HomeContent;