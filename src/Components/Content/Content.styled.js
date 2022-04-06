import styled from 'styled-components';
export const HomeContainer = styled.div`
    padding: 37px 129px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
    "h1 h1 h1 h1"
    "h2 h3 h4 h5";
`
export const Banner = styled.div`
    position: relative;
    background-image: url("https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=
    rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=
    format&fit=crop&w=1170&q=80");
    width: 100%;
    height: 513px;
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: h1;
    background-position: center right;
`

export const BannerChild1 = styled.div`
    position: relative;
    background-image: url("https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=
    rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=
    crop&w=387&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    width: 100%;
    height: 405px;
    grid-area: h2;
`
export const BannerChild2 = styled.div`
    position: relative;
    grid-area: h3;
    background-image: url("https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&ixid=
    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=
    format&fit=crop&w=387&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
    width: 100%;
    height: 405px;
`
export const BannerChild3 = styled.div`
    position: relative;
    grid-area: h4;
    background-image: url("https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=
    rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center right;
    width: 100%;
    height: 405px;
`
export const BannerChild4 = styled.div`
    position: relative;
    grid-area: h5;
    background-image: url("https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-1.2.1&ixid=
    MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=
    format&fit=crop&w=387&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    width: 100%;
    height: 405px;
`
export const Button = styled.button`
    position: absolute;
    outline: 0;
    border: 0;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
    width: 180px;
    height: 49px;
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.12);
    background-color: var(--pale-orange);
    cursor: pointer;
`
export const TitleBanner = styled.h1`
    margin-right: 83px;
    font-family: Domine;
    font-size: 48px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: right;
    color: var(--white);
`
export const TitleBannerChild = styled.h2`
    text-align: center;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
    position: absolute;
    bottom: 75px;
    right: 50px;
    width: 215px;
    font-family: Domine;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: white;
`
export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.3);
`