/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";


import "../styles/layout.css"

import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import SocialBar from "../components/SocialBar"

const TemplateWrapper = ({ children }) => {
  // const { ref, inView, entry } = useInView({
  //   // Hook Options //
  //   threshold: 1,
  // });



  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
          datoCmsFooter {
            bodyOne
            bodyThree
            listItemFive
            listItemFour
            listItemOne
            listItemThree
            listItemTwo
            titleOne
            titleThree
            titleTwo
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
              <NavBar></NavBar>
              {children}
              <Footer data={data.datoCmsFooter}></Footer>
        </>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
