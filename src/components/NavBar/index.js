import React, { useState, useRef, useEffect } from "react";
import "../../styles/navbar.css";

// Imported Sub Components
import MenuBars from "./SubComponents/MenuBars";
import Menu from "./SubComponents/Menu";

const NavBar = (props) => {
  const [menuState, setMenuState] = useState(false);

  const screenWidth = window.innerWidth;
  
  function handleMenuChange(event) {
    event.preventDefault();
    setMenuState(!menuState);
  }

  return (
    <nav className={`nav ${props.inView === false ? "nav-overlay" : ""}`}>
      {screenWidth < 1024 ? (
        <img
          src="https://www.datocms-assets.com/34814/1601044706-logomin.png"
          height="50px"
        ></img>
      ) : (
        ""
      )}
      <MenuBars handleMenuChange={handleMenuChange} menuState={menuState} />
      <Menu menuState={menuState} screenWidth={screenWidth} inView={props.inView}/>
    </nav>
  );
};

export default NavBar;
