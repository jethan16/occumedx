import React from 'react'
import { graphql } from 'gatsby'
import Layout, { inViewContext } from "../components/layout"
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'


import "../styles/app.css"
import "../styles/home.css"

// import Section from "../components/Section"
// import Partners from "../components/Banners/PartnersBanner"
// import ActionBanner from "../components/Banners/ActionBanner/index"
// import Contact from "../components/Contact/index"
// import WhatsNewBanner from "../components/Banners/WhatsNew"

const IndexPage = () => {


  // const contentBlocks = [
  //     [
  //       {
  //         icon: faMapMarkerAlt,
  //         title: data.about.titleOne,
  //         text: data.about.bodyOne,
  //         buttonText: 'See More Services',
  //         linkPath: '/services/'
  //       },
  //       {
  //         icon: faDollarSign,
  //         title: data.about.titleTwo,
  //         text: data.about.bodyTwo,
  //         buttonText: 'Learn More About Us',
  //         linkPath: '/about/'
  //       },
  //       {
  //         icon: faStar,
  //         title: data.about.titleThree,
  //         text: data.about.bodyThree,
  //         buttonText: 'See Our Partners',
  //         linkPath: '#partners'
  //       }
  //     ],
  //     [
  //       {
  //         icon: faChartLine,
  //         title: data.services.titleOne,
  //         text: data.services.bodyOne,
  //         buttonText: '',
  //         linkPath: '/services/'
  //       },
  //       {
  //         icon: faCompass,
  //         title: data.services.titleTwo,
  //         text: data.services.bodyTwo,
  //         buttonText: '',
  //         linkPath: '/services/'
  //       },
  //       {
  //         icon: faBolt,
  //         title: data.services.titleThree,
  //         text: data.services.bodyThree,
  //         buttonText: '',
  //         linkPath: '/services/'
  //       },
  //       {
  //         icon: faAmbulance,
  //         title: data.services.titleFour,
  //         text: data.services.bodyFour,
  //         buttonText: '',
  //         linkPath: '/services/'
  //       },
  //       {
  //         icon: faBookMedical,
  //         title: data.services.titleFive,
  //         text: data.services.bodyFive,
  //         buttonText: '',
  //         linkPath: '/services/'
  //       },
  //     ]
  //   ]

  // Sub Components //
  // const Hero = () => {

  //   // const { ref, inView, entry } = useInView({
  //   //   // Hook Options //
  //   //   threshold: 1,
  //   // });


  return(
          <section className='hero'>
            <div className='hero-overlay'></div>
            <img src="https://occumedx.s3.us-east-2.amazonaws.com/occumedX_logo_black_full.png"></img>
            <h1>{data.hero.heroTitle}</h1>
            <FontAwesomeIcon icon={faChevronDown} />
          </section>
  );
};

  

export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: datoCmsHomePageHeroCopy {
      heroTitle
    }
    
  }
`
