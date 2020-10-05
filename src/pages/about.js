import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout, { inViewContext } from "../components/layout"
import { useInView } from 'react-intersection-observer';
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'
import "../styles/about.css"
import SocialBar from "../components/SocialBar"
import Contact from "../components/Contact"
import Partner from "../components/Banners/PartnersBanner"
import PartnerBanner from '../components/Banners/PartnersBanner';

const About = ({ data }) => {
  
  const contentBlocks = [
    [
      {
        icon: faMapMarkerAlt,
        title: data.about.titleOne,
        text: data.about.bodyOne,
        buttonText: 'See More Services',
        linkPath: '/services/'
      },
      {
        icon: faDollarSign,
        title: data.about.titleTwo,
        text: data.about.bodyTwo,
        buttonText: 'Learn More About Us',
        linkPath: '/about/'
      },
      {
        icon: faStar,
        title: data.about.titleThree,
        text: data.about.bodyThree,
        buttonText: 'See Our Partners',
        linkPath: '#partners'
      }
    ]
  ]
  const componentTitle = data.aboutContent.componentTitle.toUpperCase()

  const { ref, inView, entry } = useInView({
    // Hook Options //
    threshold: 1,
  });

  return(
    <Layout>
      <inViewContext.Consumer>
      { context => {
        {inView === true ? context.toggleInView(inView) : context.toggleInView(inView);}
        return(
        <>
          <div className='about-page section-wrapper'>
            <div className='about-page-content'>
              <h1 className='title mb-3'>{componentTitle}</h1>
              <p className='body-content'>{data.aboutContent.componentBodyOne}</p>
              <p className='body-content'>{data.aboutContent.componentBodyTwo}</p>
              <p className='body-content'>{data.aboutContent.componentBodyThree}</p>
            </div>
            <Link to='/services/' className='navigation-banner'>
              <h1 className='navigation-banner-button'>SERVICES</h1>
            </Link>
          </div>
            <PartnerBanner partners={data.partners.companyLogos}/>
            <div className='social-wrapper'>
              <h1 className='text-center'>STAY CONNECTED WITH US</h1>
              <div className='vertical-line-break'></div>
              <SocialBar/>
            </div>
          <Contact
            ContactBannerUrl={"https://occumedx.s3.us-east-2.amazonaws.com/team.jpg"}
          />
        </>
        )
      }}
      </inViewContext.Consumer>
    </Layout>
  );
};

export default About;


  export const query = graphql`
  query AboutQuery {
    aboutContent: datoCmsAboutPage {
      componentBodyThree
      componentBodyTwo
      componentTitle
      componentBodyOne
    }
    about: datoCmsHomePageAboutOverview {
      bodyOne
      bodyThree
      bodyTwo
      titleOne
      titleThree
      titleTwo
      componentOverviewBody
      componentTitle
    }
    partners: datoCmsPartner {
      companyLogos {
        url
      }
    }
  }
`