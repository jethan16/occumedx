import React, { useState, useRef } from "react";
import "./CallUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";




export default function CallUsButton({
  icon,
  text,
  link
}) {


  return (
    <button>
        <a href='tel:7045746116'  className="call-us-button">
          <FontAwesomeIcon className='button-icon' icon={faPhoneAlt} />
          Call Us Today
        </a>
    </button>
  );
}
