import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import "../../styles/socialbar.css";

const SocialBar = () =>  (
    <div className="social-bar">
      <FontAwesomeIcon className='social-icon' icon={faFacebookSquare} />
      <FontAwesomeIcon className='social-icon' icon={faInstagramSquare} />
      <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
      <FontAwesomeIcon className='social-icon' icon={faTwitterSquare} />
    </div>
);

export default SocialBar;
