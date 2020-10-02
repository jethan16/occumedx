import { graphql } from 'gatsby';
import React from 'react';

import "../Banners.css"
import "./PartnerBanner.css"

const PartnerBanner = ({ partners }) => {
    console.log('partners', partners)

return(
    <div className='partners-banner'>
        <h6>OUR PROUD PARTNERS</h6>
        {partners.map(partner => 
            <img src={partner.url} className='partner-logo'></img>
        )}
    </div>  
)};

export default PartnerBanner

export const query = graphql`
    query PartnerBannerQuery {
        partners: datoCmsWork {
            title
            coverImage {
              url
            }
          }
    }
`