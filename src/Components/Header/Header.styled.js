import styled from 'styled-components'
export const HeaderNav = styled.div`
    color: #cccccc;
    padding: 0 129px;
    border-bottom: 2px solid #ececec;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SearchBox = styled.div`
    width: 181px;
    height: 35px;
    border-radius: 17px;
    border: solid 1px var(--greyish-two);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Input = styled.input`
    border: none;
    outline: 0;
    height: 33px;
    border-radius: 17px;
    overflow:hidden;
    margin-left: 5px;
    padding-right: 5px;
`
export const Logo = styled.img`
    width: 96px;
    height: 20px;
    object-fit: contain;
`
export const Login = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    align-items: center;
`
export const Loginbutton = styled.button`
    font-weight: bold;
    text-align: center;
    width: 120px;
    height: 35px;
    border-radius: 100px;
    border: solid 1px var(--pale-orange);
    background: var(--white);
    color: var(--pale-orange);
    cursor:pointer;
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
    &:hover{
        background: var(--pale-orange);
        color: var(--white);
    }
    
`
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    transform: translateX(-30px);
`
export const NavbarItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3px;
`
export const NavbarItemDiv = styled.div`
    
`