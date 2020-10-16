import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import "../../styles/socialbar.css";

const SocialBar = () =>  {
  return(
    <StaticQuery
      query={graphql`
        query SocialProfilesQuery {
          platform: allDatoCmsSocialProfile {
            edges {
              node {
              url
              }
            }
          }
        }
      `}
        render={ ({platform}) => {
          console.log('1', platform.edges[0].node.url)
        return(
          <div className="social-bar">
          <a target='_blank' href={platform.edges[2].node.url}>
            <FontAwesomeIcon className='social-icon' icon={faFacebookSquare} />
          </a>
          <a target='_blank' href={platform.edges[1].node.url}>
            <FontAwesomeIcon className='social-icon' icon={faInstagramSquare} />
          </a>
          <a target='_blank' href={platform.edges[0].node.url}>
            <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
          </a>
          </div>)
        }}
    />
  )
};

export default SocialBar;


