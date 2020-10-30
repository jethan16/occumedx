import React from 'react';
import { graphql } from 'gatsby';
import Layout, { inViewContext } from "../components/layout"
import { useInView } from 'react-intersection-observer';
import Form from "../components/Form/Form"
import "../styles/contact.css"

const Contact = ({ data }) => {

    const { ref, inView, entry } = useInView({
        // Hook Options //
        threshold: 1,
      });

    return(
        <Layout>
            <>
                <div className='contact-page section-wrapper'>
                    <div className='overlay-color'></div>
                    <div className='about-page-content'>
                        <div>
                            <h1 className='title'>{data.contact.componentOverviewTitle}</h1>
                            <p className='body-content'>{data.contact.componentOverviewBody}</p>
                        </div>
                        <div className='form'>
                            <Form />
                        </div>
                    </div>
                </div>   
            </>
        </Layout>
    )
}

export default Contact;

    export const query = graphql`
        query ContactQuery {
            contact: datoCmsContactPage {
                componentOverviewBody
                componentOverviewTitle
            }
            partners: datoCmsPartner {
                companyLogos {
                  url
                }
              }
        }
`
