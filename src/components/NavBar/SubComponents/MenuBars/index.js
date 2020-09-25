import React from "react";
import "./MenuBars.css";

const MenuBars = ({ handleMenuChange, menuState }) => {
  return (
    <div
      className="menu-bars"
      onClick={handleMenuChange}
      onBlur={handleMenuChange}
    >
      <div className={`bar ${menuState === false ? "" : "bar-one"}`} />
      <div className={`bar ${menuState === false ? "" : "bar-two"}`} />
      <div className={`bar ${menuState === false ? "" : "bar-three"}`} />
    </div>
  );
};

export default MenuBars;
