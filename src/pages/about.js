import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { useInView } from 'react-intersection-observer';
import "../styles/about.css"
import SocialBar from "../components/SocialBar"
import Contact from "../components/Contact"
import PartnerBanner from '../components/Banners/PartnersBanner';

function About({data}) {
  console.log(data)
  return(
    <Layout>
       <div className='about-page'>
       <div class='about-page-upper-content'>
          <div class='container'>
              <div className="about-title">
                <h3 className='mb-1 title'>ABOUT US</h3>
                <p className="body-content p-0 mt-1">
                    {data.aboutContent.pageTitleBody}
                </p>
              </div>
          </div>
          <div class='container about-content'>
            <div className='body-content'>
              <h4>{data.aboutContent.componentTitleOne}</h4>
              <p>{data.aboutContent.componentBodyOne}</p>
            </div>
            <div className='body-content'>
              <h4>{data.aboutContent.componentTitleTwo}</h4>
              <p>{data.aboutContent.componentBodyTwo}</p>
            </div>
            <div className='body-content'>
              <h4>{data.aboutContent.componentTitleThree}</h4>
              <p>{data.aboutContent.componentBodyThree}</p>
            </div>
          </div>
       </div>
        {/* <div className='section-wrapper about-page'>
          <div className="about-title">
            <h3 className='mb-1 title'>ABOUT US</h3>
            <p className="body-content p-0 mt-1">
                {data.aboutContent.componentTitle}
            </p>
          </div>
        </div>
        <div className='about-page-lower-content'>
          <div className='about-page-content'>
            <p className='body-content'>{data.aboutContent.componentBodyOne}</p>
            <p className='body-content'>{data.aboutContent.componentBodyTwo}</p>
            <p className='body-content'>{data.aboutContent.componentBodyThree}</p>
          </div>
          <Link to='/services/' className='navigation-banner'>
            <h1 className='navigation-banner-button'>SOLUTIONS</h1>
          </Link>
        </div>
          {/* <PartnerBanner partners={data.partners.companyLogos}/> */}
          {/* <div className='social-wrapper'>
            <h1 className='text-center'>STAY CONNECTED WITH US</h1>
            <div className='vertical-line-break'></div>
            <SocialBar/>
          </div>  */}
        <Contact
          ContactBannerUrl={"https://www.datocms-assets.com/34814/1646332260-contact-splash-image.jpg"}
        />
      </div>
    </Layout>
  );
};

export default About;

export const query = graphql`
query AboutQuery {
  aboutContent: datoCmsAboutPage {
    componentBodyOne
    componentBodyThree
    componentBodyTwo
    componentTitleOne
    componentTitleThree
    componentTitleTwo
    pageTitleBody
  }
  partners: datoCmsPartner {
    companyLogos {
      url
    }
  }
}
`
