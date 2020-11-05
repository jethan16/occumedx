import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import { useInView } from 'react-intersection-observer';
import "../styles/about.css"
import SocialBar from "../components/SocialBar"
import Contact from "../components/Contact"
import PartnerBanner from '../components/Banners/PartnersBanner';

function About() {
  
  // const componentTitle = data.aboutContent.componentTitle.toUpperCase()

  // const { ref, inView, entry } = useInView({
  //   // Hook Options //
  //   threshold: 1,
  // });

  return(
    <Layout>
      <>
        {/* <div className='section-wrapper about-page'>
          <div className='about-page-content'>
            <h1 className='title mb-3'>{data.aboutContent.componentTitle.toUpperCase()}</h1>
            <p className='body-content'>{data.aboutContent.componentBodyOne}</p>
            <p className='body-content'>{data.aboutContent.componentBodyTwo}</p>
            <p className='body-content'>{data.aboutContent.componentBodyThree}</p>
          </div>
          <Link to='/services' className='navigation-banner'>
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
        /> */}
      </>
    </Layout>
  );
};

export default About;


// export const query = graphql`
// query AboutQuery {
//   aboutContent: datoCmsAboutPage {
//     componentBodyThree
//     componentBodyTwo
//     componentTitle
//     componentBodyOne
//   }
//   partners: datoCmsPartner {
//     companyLogos {
//       url
//     }
//   }
// }
// `
