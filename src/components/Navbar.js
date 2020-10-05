import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display:flex;
    justify-content:center;
    padding-bottom:3rem;

    @media (min-width: 768px){
        padding-bottom:0;
    }

`;
const NavLink = styled(Link)`
    color:#f1faee;
    font-size:1.6rem;
    font-weight:bold;
    line-height:1rem;
    font-family: 'Fjalla One', sans-serif;
    text-decoration:none;
    padding:1rem;
    margin-right:1rem;

    &:last-of-type{
        margin-right:0;
    }
    &.activePage{
        border-bottom:2px solid #f1faee;
    }

`;
const Navbar = () => {
    return (
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="activePage"
            >Inicio</NavLink>
            <NavLink
                to={'/nosotros'}
                activeClassName="activePage"
            >Nosotros</NavLink>
        </Nav>
    )
}

export default Navbar
