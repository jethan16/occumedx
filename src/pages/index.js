import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTools} from '@fortawesome/free-solid-svg-icons'


import "../styles/app.css"
import "../styles/home.css"


const IndexPage = ({ data }) => {
    return(
        <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', margin: '0 auto', padding: '300px 0px'}}>
            <h1 style={{width: '100%', textAlign: 'center',fontSize: '50px'}}>{data.construction.title}</h1>
            <FontAwesomeIcon icon={faTools} style={{color: '#293132', fontSize: '150px', marginTop: '75px'}}/>
        </div>
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
