import React, { useState, useRef, useEffect } from "react";
import "../../styles/navbar.css";

// Imported Sub Components
import MenuBars from "./SubComponents/MenuBars";
import HamburgerMenu from "./SubComponents/HamburgerMenu"
import Menu from "./SubComponents/Menu";
import { inViewContext } from "../../provider"

const NavBar = ({viewState}) => {
  const [menuState, setMenuState] = useState(false);


  function handleMenuChange(event) {
    event.preventDefault();
    setMenuState(!menuState);
  }

  console.log(viewState)

  return (
            <nav className={`nav ${viewState === false ? "nav-overlay" : ""}`}>
              <img className='hamburger-menu-logo' src="https://www.datocms-assets.com/34814/1601044706-logomin.png" height="50px" ></img>
              <MenuBars handleMenuChange={handleMenuChange} menuState={menuState} inView={viewState}/>
              <Menu menuState={menuState} inView={viewState}/>
              <HamburgerMenu menuState={menuState} inView={viewState}/>
            </nav>
  );
};

export default NavBar;
