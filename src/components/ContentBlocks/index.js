import React from "react";
import "./ContentBlocks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentBlocks({ icon, title, text, cardStyle, buttonText }) {
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
      <p className="body-content">{text}</p>
      {cardStyle === 'default' ? <button className='button'>{buttonText}</button> : ''}
    </section>
  );
}
