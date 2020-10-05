/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/layout.css"

import NavBar from "../components/NavBar"
import Footer from "../components/footer"

export const inViewContext = createContext(null);

const TemplateWrapper = ({ children }) => {

  const [ inViewState, setInViewState ] = useState()

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
      
      render={data => {

      
        return (
        <>

          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <inViewContext.Provider value={{inViewState, toggleInView: (inViewFromIndex) => {
            console.log('Context Function Called', inViewFromIndex) 
            setInViewState(inViewFromIndex)
          }}}>
              <NavBar
                viewState={inViewState}
              ></NavBar>
              {children}
              <Footer data={data.datoCmsFooter}></Footer>
          </inViewContext.Provider>
        </>
        )
      }}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
