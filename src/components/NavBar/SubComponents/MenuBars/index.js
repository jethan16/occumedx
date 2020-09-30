import React from "react";
import "./MenuBars.css";
import styled from '@emotion/styled';


const MenuBars = ({ handleMenuChange, menuState, inView }) => {

  // const Bar = styled.div`
  //   background: ${inView ? '#293132' : '#f4f4f9'};
  // `

  return (
    <div
      className="menu-bars"
      onClick={handleMenuChange}
      onBlur={handleMenuChange}
    >
      <div className={`bar ${menuState ? 'bar-one' : ''} ${inView ? 'bar-dark' : 'bar-light'}`} />
      <div className={`bar ${menuState ? 'bar-two' : ''} ${inView ? 'bar-dark' : 'bar-light'}`} />
      <div className={`bar ${menuState ? 'bar-three' : ''} ${inView ? 'bar-dark' : 'bar-light'}`} />
    </div>
  );
};

export default MenuBars;
