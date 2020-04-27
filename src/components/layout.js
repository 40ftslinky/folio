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



const Layout = ({ children }) => (
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
        <Helmet>
          {/* add custom font */}
          <link rel="stylesheet" href="https://use.typekit.net/vds2fdi.css" />
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:900&display=swap" rel="stylesheet" />
          {/* add cdn jquery */}
          <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossOrigin="anonymous"
          />
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

        <Header id="js-header" menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
