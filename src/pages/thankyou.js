import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import "../components/style/thanks.css"

const thankyouPage = () => (
    <Layout>
      <Seo title="Thankyou" />
  
        <div className="contact_inner">
          <div className="contact_info">
          <div className="contact_text_wrap section_wrap">
            <h1 className="contact_title">Thank you!</h1>
            <div className="contact_description">
              <p><span>&nbsp;Success!&nbsp;</span></p>
            </div>
            <div className="contact_copy">

                <p>Thank you page for submitting your details.</p>
                <p>We'll contact you shortly regarding your enquiry.</p>

            </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default thankyouPage