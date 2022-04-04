import React from "react";
import { Link } from "gatsby"
import "./ContentBlocks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentBlocks({ icon, title, text, cardStyle, buttonText, linkPath }) {
  return (
    <section className={`content-block ${cardStyle === 'default' ? 'card' : ' card card-alt'}`}>
      {cardStyle === 'default' ? <FontAwesomeIcon className='icon' icon={icon} /> : (
        <>
          <div className='icon-alt'>
              <FontAwesomeIcon className='icon' icon={icon} style={{fontSize: '40px'}}/>
          </div>
        </>
      )}
      <h4 className='mt-2'><strong>{title}</strong></h4>
      <div className='line-break-horizontal'></div>
      {
        cardStyle === 'default' ?
        <p className="body-content">{text}</p> 
        : cardStyle === 'alternate' ?
        <p className="body-content">{text}</p> 
        : cardStyle === 'alternate-list' ? 
        <ul style={{textAlign: 'center', marginTop: '10px'}}>
          {
            text.map(item => (
              <li style={{margin: '10px', fontFamily: 'Open Sans'}}>{item}</li>
            ))
          }
        </ul> : <></>
      }
      {cardStyle === 'default' ? (

          <Link to={linkPath}>
            <button className='button'>
              {buttonText}
            </button>
          </Link>
        
        ) : <></>}
    </section>
  );
}
