import React from "react";
import "./ContentBlocks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentBlocks({ content }) {
  return (
    <section className={"content-block"}>
      <FontAwesomeIcon className='icon' icon={content.icon} />
      <h4 className='mt-2 title'><strong>{content.title}</strong></h4>
      <div className='line-break-horizontal'></div>
      <p className="body-content">{content.text}</p>
    </section>
  );
}
