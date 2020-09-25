import React, { useState, useRef } from "react";
import "./CallUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CallUsButton({
  buttonBorderColor,
  buttonColor,
  icon,
  text,
  numberToCall
}) {


  return (
    <button style={buttonBorderColor}>
    <a href={numberToCall}  className="call-us-button">
      {icon === "" ? "" : <FontAwesomeIcon className='button-icon' icon={icon} />}
      <p style={buttonColor}>{text}</p>
    </a>
    </button>
  );
}
