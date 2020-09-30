import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import "./HamburgerMenu.css"

const NavLink = styled(Link)`
font-family: 'Work Sans';
font-size: 22px;
color: #293132;
padding: 5px 0;
margin: 15px 0;
font-weight: 500;
border-bottom: 2px solid transparent;
`


const HamburgerMenu = ({ menuState, inView }) => {
    return(
        <menu className={`${menuState ? 'menu-open' : 'menu-closed'} ${inView ? '' : 'menu-higher-pos'}`}>
            <NavLink to='/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>HOME</NavLink>
            <NavLink to='/about/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>ABOUT</NavLink>
            <NavLink to='/services/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>SERVICES</NavLink>
        </menu>
    )
};

export default HamburgerMenu;