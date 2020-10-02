import React from "react";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import "./Menu.css";


// Imported Sub Components //
import CallUsButton from "../../../Buttons/CallUs";


const Menu = ({ inView }) => {

  // console.log('1',inView)

  const NavLink = styled(Link)`
  font-family: 'Work Sans';
  color: ${inView ? '#293132' : '#f4f4f9'};
  padding: 5px 0;
  margin: 0px 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  `
  return (
    <div className={'menu'}>
      <div className='header-first'>
        <img src="https://www.datocms-assets.com/34814/1601044706-logomin.png" height="50px" ></img>
      </div>
      <div className='header-second'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about/'>ABOUT</NavLink>
        <NavLink to='/services/'>SERVICES</NavLink>
      </div>
      <div className='header-third'>
        <CallUsButton />
      </div>
    </div>
  );
};

export default Menu;
