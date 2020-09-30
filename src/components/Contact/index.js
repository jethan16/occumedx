import React from 'react';
import "../../styles/home.css";

import Form from "../Form/Form"
import Banner from "../Banners/index"

const Contact = () => (

    <section className="contact-section">
        <div className='banner'>
            <Banner
              bannerUrl={"https://occumedx.s3.us-east-2.amazonaws.com/team.jpg"}
            />
        </div>
        <div className="contact-lower p-4">
              <h3 className='title-content pt-2'><strong>Let us know how we can help. </strong></h3>
              <h3 className='pb-3 pt-1'>Or have a suggestion?</h3>
              <Form />
        </div>
    </section>  
);

export default Contact;