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

        </Helmet>

        <Header id="js-header" siteTitle={data.site.siteMetadata.title} />

        <div class="main_wrapper">

          <main>{children}</main>

          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
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
