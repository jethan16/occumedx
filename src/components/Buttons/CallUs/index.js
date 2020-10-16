import React, { useState, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import "./CallUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";




const CallUsButton = () => {

  return (
    <StaticQuery
      query={graphql`
          query CallUsQuery {
            phone: datoCmsCallUsTodayNumber {
              phoneNumber
            }
          }
        `}
        render={ ({phone}) => {
          return(
            <button>
                <a href={`tel:${phone.phoneNumber}`}  className="call-us-button">
                  <FontAwesomeIcon className='button-icon' icon={faPhoneAlt} />
                  Call Us Today
                </a>
            </button>
          )
        }}
    />
  );
}

export default CallUsButton;


