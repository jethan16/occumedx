import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import "../styles/app.css"
import "../styles/home.css"

import ContentBlock from "../components/ContentBlocks/index";
import CallUsButton from "../components/Buttons/CallUs";
import Banner from "../components/Banners";
import Form from "../components/Form/Form";




const IndexPage = ({ data }) => {
 
const contentBlocksAbout = [
    {
      icon: faMapMarkerAlt,
      title: data.about.titleOne,
      text: data.about.bodyOne
    },
    {
      icon: faDollarSign,
      title: data.about.titleTwo,
      text: data.about.bodyTwo
    },
    {
      icon: faStar,
      title: data.about.titleThree,
      text: data.about.bodyThree
    }
]
const contentBlocksServices = [
    {
      icon: "",
      title: data.services.titleOne,
      text: data.services.bodyOne
    },
    {
      icon: "",
      title: data.services.titleTwo,
      text: data.services.bodyTwo
    },
    {
      icon: "",
      title: data.services.titleThree,
      text: data.services.bodyThree
    }
]

// Sub Components //
const Hero = () => (
    <section className='hero'>
      <div className='hero-overlay'></div>
      <img src="https://occumedx.s3.us-east-2.amazonaws.com/occumedX_logo_black_full.png"></img>
      <h1>{data.hero.heroTitle}</h1>
      <FontAwesomeIcon icon={faChevronDown} />
    </section>
  )
const Services = () => (
  <main className="services-section">
      <h3 className="title-content pt-2" style={{ fontSize: "18px" }}>
        <strong>OFFERING YOU THE BEST SOLUTIONS FOR YOUR HEALTH AND SAFETY PROGRAMS</strong>
      </h3>
      <section className="about-values">
        {contentBlocksServices.map((block) => (
          <ContentBlock
            content={{
              icon: block.icon,
              title: block.title,
              text: block.text,
              fontColor: "#f4f4f9",
            }}
          />))}
      </section>
        <CallUsButton
          icon={""}
          text={"See Our Services"}
          buttonColor={{ color: "#f4f4f9" }}
          buttonBorderColor={{ borderColor: "rgba(244,244,249,.5)" }}/>
  </main>
)
const About = () => (
  <main className="about-section mt-1">
    <div className='header-wrapper'>
      <header className='about-header'>
        <img src='https://occumedx.s3.us-east-2.amazonaws.com/About_SplashContent.png'></img>
      </header>
    </div>
    <div className="section-wrapper about-content">
      <div className="title-content about-title">
        <div className='about-title-content'>
          <h3 className='mb-1 text-start title'>{data.about.componentTitle}</h3>
          <p className="body-content text-start m-0 p-0 mt-1 mb-1">
            {data.about.componentOverviewBody}
          </p>
        </div>
        <button>Learn More About Us</button>
      </div>
    <div className='line-break-full'></div>
      <section className="about-values">
          {contentBlocksAbout.map((block) => (
          <ContentBlock
            content={{
            icon: block.icon,
            title: block.title,
            text: block.text,
          }}
        />))}
      </section>
    </div>
  </main>
)

  return (
    <Layout>
      <div className="home-page">
        <Hero></Hero>
        <Services></Services>
        <About></About>
        {/* <section className="contact-section">
          <div className='banner'>
            <Banner
              bannerUrl={"https://occumedx.s3.us-east-2.amazonaws.com/team.jpg"}
            />
          </div>
          <div className="contact-lower p-4">
              <h3 className='title-content pt-2'><strong>Let us know how we can help. </strong></h3>
              <h3 className='pb-3 pt-1'>Or have a suggestion?</h3>
              <Form />
          </div>
          <div className="clip-bottom-fill" style={{ background: "#193132" }}></div>
        </section>  */}
      </div>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
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
      bodyOne
      bodyThree
      bodyTwo
      titleOne
      titleThree
      titleTwo
    }
  }
`
