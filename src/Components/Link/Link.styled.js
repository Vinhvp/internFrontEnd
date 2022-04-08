import styled from 'styled-components';

export const LinkT = styled.a`
    margin-left: 5px;
    text-decoration: none;
    font-size:  ${props => props.sized};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
`