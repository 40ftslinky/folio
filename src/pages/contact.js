import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NetlifyForm from "../components/form"

import "../components/style/contact.css"


const ContactFormPage = () => (
  <Layout>
    <Seo title="Contact" />

      <div className="contact_inner">
        <div className="contact_info">
        <div className="contact_text_wrap section_wrap">
          <h1 className="contact_title">Contact</h1>
          <div className="contact_description">
            <p><span>&nbsp;Make your enquiry&nbsp;</span></p>
          </div>
          <div className="contact_copy">
            
          </div>
          

            <NetlifyForm />
              

          </div>
      </div>
    </div>
  </Layout>
)

export default ContactFormPage
