import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import "./HamburgerMenu.css"

const NavLink = styled(Link)`
font-family: 'Montserrat';
color: #293132;
padding: 5px 0;
margin: 15px 0;
font-weight: 600;
border-bottom: 2px solid transparent;

&.current-page {
    border-bottom: 2px solid #293132;
}
`


const HamburgerMenu = ({ menuState }) => {

    return(
        <menu className={menuState === true ? 'menu-open' : 'menu-closed'}>
            <NavLink to='/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>HOME</NavLink>
            <NavLink to='/about/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>ABOUT</NavLink>
            <NavLink to='/services/' activeClassName='current-page' className={menuState === true ? 'nav-links-show' : 'nav-links-hide'}>SERVICES</NavLink>
        </menu>
    )
};

export default HamburgerMenu;