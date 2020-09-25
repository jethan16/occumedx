import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Services = ({ data: { services } }) => {

    console.log(services)

    return(
        <Layout>
            <h1>{services.title}</h1>
            <h4>{services.subtitle}</h4>
        </Layout>
    )
}

export default Services; 

export const query = graphql`
  query ServicesQuery {
    services: datoCmsServicesPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
    }
  }
`