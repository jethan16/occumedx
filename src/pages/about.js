import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
// import { useInView } from 'react-intersection-observer';
import "../styles/about.css"
import SocialBar from "../components/SocialBar"
import Contact from "../components/Contact"
import PartnerBanner from '../components/Banners/PartnersBanner';

const About = ({ data }) => {
  
  // const componentTitle = data.aboutContent.componentTitle.toUpperCase()

  // const { ref, inView, entry } = useInView({
  //   // Hook Options //
  //   threshold: 1,
  // });

  return(
    <h1>Testing</h1>
  );
};

export default About;


//   export const query = graphql`
//   query AboutQuery {
//     aboutContent: datoCmsAboutPage {
//       componentBodyThree
//       componentBodyTwo
//       componentTitle
//       componentBodyOne
//     }
//     partners: datoCmsPartner {
//       companyLogos {
//         url
//       }
//     }
//   }
// `
