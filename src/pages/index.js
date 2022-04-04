// After construction is complete - rename this file "index.js" and delete the current index.js 

import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout, { inViewContext } from "../components/layout"
import { InView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown, faBookMedical, faBolt, faChartLine, faAmbulance, faCompass } from '@fortawesome/free-solid-svg-icons'


import "../styles/app.css"
import "../styles/home.css"

import Section from "../components/Section"
import Partners from "../components/Banners/PartnersBanner"
import ActionBanner from "../components/Banners/ActionBanner/index"
import Contact from "../components/Contact/index"
import WhatsNewBanner from "../components/Banners/WhatsNew"

const IndexPage = ({ data }) => {
 

const contentBlocks = [
    [
      {
        icon: faMapMarkerAlt,
        title: data.about.titleOne,
        text: data.about.bodyOne,
        buttonText: 'See More Solutions',
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
    ],
    [
      {
        icon: faChartLine,
        title: data.services.titleOne,
        text: data.services.bodyOne,
        buttonText: '',
        linkPath: '/services/'
      },
      {
        icon: faCompass,
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
        icon: faBookMedical,
        title: data.services.titleFive,
        text: data.services.bodyFive,
        buttonText: '',
        linkPath: '/services/'
      },
    ]
  ]

useEffect(() => {})

// Sub Components //
const Hero = () => {

    // const { ref, inView, entry } = useInView({
    //   // Hook Options //
    //   threshold: 1,
    // });

  return(
    <InView>
      {({inView, ref}) => (
        <inViewContext.Consumer>
          { context => {
            {inView === true ? context.toggleInView(inView) : context.toggleInView(inView);}
            return(
              <section className='hero'>
                <div className='hero-overlay'></div>
                <img src="https://www.datocms-assets.com/34814/1646324395-ocx-straight-logo-black-letters-edited.png" ref={ref}></img>
                <h1>{data.hero.heroTitle}</h1>
                <FontAwesomeIcon icon={faChevronDown} />
              </section>
            )
          }}
        </inViewContext.Consumer>
      )}
    </InView>
  );
};

  
return (
    <Layout >
      <div className="home-page">
        <Hero></Hero>
        {/* <WhatsNewBanner></WhatsNewBanner> */}
        <Section 
          componentTitle={data.about.componentTitle}
          componentOverviewBody={data.about.componentOverviewBody}
          contentBlock={contentBlocks[0]}
          sectionStyle={'about'}
          cardStyle={'default'}
        />
        <ActionBanner></ActionBanner>
        <Section 
          componentTitle={data.services.componentTitle}
          componentOverviewBody={data.services.componentOverviewBody}
          contentBlock={contentBlocks[1]}
          sectionStyle={'services'}
          cardStyle={'alternate'}
          color={'##f4f4f9'}
          backgroundColor={'#293132'}
        />
        <div id='partners'>
          <Partners partners={data.partners.companyLogos}/>
        </div>
        <Contact 
          ContactBannerUrl={"https://www.datocms-assets.com/34814/1646332260-contact-splash-image.jpg"}
        />
      </div>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: datoCmsHomePageHeroCopy {
      heroTitle
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
    partners: datoCmsPartner {
      companyLogos {
        url
      }
    }
  }
`
