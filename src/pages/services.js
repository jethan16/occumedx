import React from 'react'
import { graphql, Link } from 'gatsby'
import { useInView } from 'react-intersection-observer';
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout, {inViewContext} from "../components/layout"
import Section from "../components/Section"
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'
import "../styles/services.css"

const ExternalLink = ({hyperText, text, link}) => {
  return (
   <>{text} <a href={link} target="_blank" style={{color: '#ce2026'}}>{hyperText}</a></>
  )
}

const Services = ({ data }) => {

    const { ref, inView, entry } = useInView({
      // Hook Options //
      threshold: 1,
    });

    const contentBlocks = [
      {
        icon: faAmbulance,
        title: data.services.titleFour,
        text: ['Onsite health clinic', 'Roving medic', 'Mobile health clinic', 'Telemedicine', 'Physician oversight and In-depth Case Management'],
        buttonText: '',
        linkPath: '/services/'
      },
      {
        icon: faChartLine,
        title: data.services.titleOne,
        text: ['Onsite Testing', 'Mobile Testing','Clinic based Testing', 'Multiple Panel Options', 'MRO Oversight'],
        buttonText: '',
        linkPath: '/services/'
      },
      {
        icon: faCompass,
        title: data.services.titleTwo,
        text: ['CPR/First Aid', 'Stop the Bleed', 'Bloodborne Pathogen', 'Many more available'],
        buttonText: '',
        linkPath: '/services/'
      },
      {
        icon: faBookMedical,
        title: data.services.titleFive,
        text: ['Onsite wellness clinic', 'Mobile wellness clinic', 'Mental health training', 'Employer insurance wellness exams'],
        buttonText: '',
        linkPath: '/services/'
      },
      {
        icon: faBolt,
        title: data.services.titleThree,
        text: [<ExternalLink text={'To see all of the solutions provided by our safety partners'} hyperText={'click here'} link={'https://www.ocxsafety.com/'}/>],
        buttonText: '',
        linkPath: '/services/'
      }
    ]

    return(
      <Layout>
        <div className='services-page'>
          <Section 
            componentTitle={data.services.componentTitle}
            componentOverviewBody={data.services.componentOverviewBody}
            contentBlock={contentBlocks}
            sectionStyle={'services'}
            cardStyle={'alternate-list'}
            backgroundColor={`{'#f4f4f9'}`}
          />
        </div>
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