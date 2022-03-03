import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faTools} from '@fortawesome/free-solid-svg-icons'


import "../styles/app.css"
import "../styles/home.css"
import "../styles/landing-page.css"


const IndexPage = ({ data }) => {
    return(
        // <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', margin: '0 auto', padding: '300px 0px'}}>
        //     <h1 style={{width: '100%', textAlign: 'center',fontSize: '50px'}}>{data.construction.title}</h1>
        //     <FontAwesomeIcon icon={faTools} style={{color: '#293132', fontSize: '150px', marginTop: '75px'}}/>
        // </div>
        <section className='hero'>
          <div className='hero--overlay'></div>
          <div className='hero-title'>
            <img src='https://www.datocms-assets.com/34814/1620832856-occumedx-logo.png'/>
            <h1>COVID-19 screening and testing available.</h1>
            <div className='card'>
              <p>Contact us for more information.</p>
                <div className='contact-row'>
                  <FontAwesomeIcon icon={faPhone}/>
                  <div className='circle-row'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                  </div>
                  <a href='tel:980-223-5849'><p>980-223-5849</p></a>
                </div>
                <div className='contact-row'>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <div className='circle-row'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                    <div className='circle'></div>
                  </div>
                  <p>info@occumedx.com</p>
                </div>
            </div>
          </div>
        </section>
    )
}
export default IndexPage

export const query = graphql`
  query UnderConstrucionQuery {
    construction: datoCmsUnderConstruction {
        title
      }
  }
`
