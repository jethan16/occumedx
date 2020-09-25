import React from "react";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import "./Menu.css";


// Imported Sub Components //
import CallUsButton from "../../../Buttons/CallUs";

const NavLink = styled(Link)`
font-family: 'Montserrat';
color: #293132;
padding: 5px 0;
margin: 0px 10px;
font-weight: 600;
display: flex;
align-items: center;

&.current-page {
    border-bottom: 2px solid #293132;
}
`

const Menu = ({ inView }) => {
  return (
    <div className='menu'>
      <div className='header-first'>
        <img src="https://www.datocms-assets.com/34814/1601044706-logomin.png" height="50px" ></img>
      </div>
      <div className='header-second'>
        <NavLink to='/' activeClassName='current-page'>HOME</NavLink>
        <NavLink to='/about/' activeClassName='current-page'>ABOUT</NavLink>
        <NavLink to='/services/' activeClassName='current-page'>SERVICES</NavLink>
      </div>
      <div className='header-third'>
        <CallUsButton icon={faPhoneAlt} text={"Call Us Today"} />
      </div>
    </div>
  );
};

export default Menu;
