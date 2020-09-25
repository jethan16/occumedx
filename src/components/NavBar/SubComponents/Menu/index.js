import React from "react";
import "./Menu.css";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


// Imported Sub Components //
import CallUsButton from "../../../Buttons/CallUs";

const Menu = ({ menuState, screenWidth, inView }) => {
  return (
    <div className={`nav-${menuState === false ? "menu" : "menu-open"} ${inView === true ? 'mt-2' : ''}`}>
      {screenWidth >= 1024 ? (
        <div className="col-3 nav-logo">
          <img
            src="https://occumedx.s3.us-east-2.amazonaws.com/logo_min.png"
            width="40px"
          ></img>
        </div>
      ) : (
        ""
      )}
      <div className="nav-links col-3">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/">
          About
        </a>
        <a className="nav-link" href="/">
          Services
        </a>
      </div>
      <CallUsButton icon={faPhoneAlt} text={"Call Us Today"} />
    </div>
  );
};

export default Menu;
