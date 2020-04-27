import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/basic.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="page_inner">
      <div className="page_info">
        <div className="page_text_wrap section_wrap">

          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>

        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
