import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import "../ActionBanner/ActionBanner.css"


const WhatsNewBanner = () => {
    return(
        <StaticQuery
            query={graphql`
                query WhatsNewQuery {
                    whatsNew: datoCmsWhatsNewBanner {
                        bannerTitle
                        bannerBody
                    }
                }
            `}
        render={({whatsNew}) => {
            console.log('5',whatsNew)
            return(
            <div className='action-banner'>
                <h1>{whatsNew.bannerTitle}</h1>
                <Link to='/contact/'>
                    <button>LEARN MORE</button>
                </Link>
            </div>)
            }}
        />
    )
};

export default WhatsNewBanner;
