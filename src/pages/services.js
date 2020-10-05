import React from 'react'
import { graphql, Link } from 'gatsby'
import { useInView } from 'react-intersection-observer';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout, {inViewContext} from "../components/layout"
import Section from "../components/Section"
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'

import "../styles/services.css"

const Services = ({ data }) => {

    const { ref, inView, entry } = useInView({
      // Hook Options //
      threshold: 1,
    });

    const contentBlocks = [
        {
          icon: faChartLine,
          title: data.services.titleOne,
          text: data.services.bodyOne,
          buttonText: '',
          linkPath: '/services/'
        },
        {
          icon: faBookMedical,
          title: data.services.titleTwo,
          text: data.services.bodyTwo,
          buttonText: '',
          linkPath: '/services/'
        },
        {
          icon: faBolt,
          title: data.services.titleThree,
          text: data.services.bodyThree,
          buttonText: '',
          linkPath: '/services/'
        },
        {
          icon: faAmbulance,
          title: data.services.titleFour,
          text: data.services.bodyFour,
          buttonText: '',
          linkPath: '/services/'
        },
        {
          icon: faCompass,
          title: data.services.titleFive,
          text: data.services.bodyFive,
          buttonText: '',
          linkPath: '/services/'
        },
    ]

    return(
      <Layout>
        <inViewContext.Consumer>
          { context => {
            {inView === true ? context.toggleInView(inView) : context.toggleInView(inView);}
            return(
              <div className='services-page'>
                <Section 
                  componentTitle={data.services.componentTitle}
                  componentOverviewBody={data.services.componentOverviewBody}
                  contentBlock={contentBlocks}
                  sectionStyle={'services'}
                  cardStyle={'alternate'}
                  backgroundColor={`{'#f4f4f9'}`}
                />
              </div>
            )
          }}
        </inViewContext.Consumer>
      </Layout>
    )
}

export default Services; 

export const query = graphql`
  query ServicesQuery {
    services: datoCmsHomePageServicesOverview {
      bodyFive
      bodyFour
      bodyOne
      bodySix
      bodyThree
      bodyTwo
      componentTitle
      componentOverviewBody
      titleOne
      titleTwo
      titleFour
      titleFive
      titleSix
      titleThree
    }
  }
`