import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width:  202px;
    height: 345px;
    align-items: flex-start;
    overflow: hidden;
    img{
        height: 252px;
        padding: 0;
        width: 100%;
        object-fit: cover;
        object-position: top center;
    }
    h6{
        width: 180px;
        height: 40px;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;
        color: var(--dark-grey);
        margin: 10px 0 10px 0;
        transform: translateX(-10px);
    }
    div{
        width: 44px;
        height: 22px;
        font-family: Montserrat;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.83;
        letter-spacing: normal;
        color: var(--greyish);
        transform: translateX(-80px);
    }
    a{
        text-decoration: none;
        color: var(--dark-grey);
    }
`