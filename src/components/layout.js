/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";

import Header from "./header"



const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}


      render={data => (
        <>
          <Helmet
            title={'title'}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'Agency, Creative, Digital, Print, Brand, Design, Development, UX, Sydney, Australia' },
            ]}
            bodyAttributes={{
              class: 'new-class-for-body'
            }}
          >
            {/* add custom font */}
            {/* playfair */}
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:900&display=swap" rel="stylesheet" />
            {/* add custom font */}
            {/* Raleway */}
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap" rel="stylesheet" />
            {/* add custom font */}
            {/* DM Sans */}
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet"/>
            {/* add cdn jquery */}
            {/*
            <script
              src="https://code.jquery.com/jquery-3.5.1.min.js"
              integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
              crossOrigin="anonymous"
            />
            */}
            {/* <script>
              $(window).scroll(function () {
                if ($(window).scrollTop() > 10) {
                  $('.Header').addClass('floatingHeader');
                } else {
                  $('.Header').removeClass('floatingHeader');
                }
              })
            </script> */}


          </Helmet>

          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

          <div className="main_wrapper">

            <main>{children}</main>

            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://www.contentful.com">Contentful</a>, and brute force :)
            </footer>
          </div>
        </>
      )}
    />
  )
};

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layout;
