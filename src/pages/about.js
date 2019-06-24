import React from "react"
import img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../components/about.css"


export default ({ data }) => (

  <Layout>
  <div class="about_inner">
    <div class="about_info">
      <div class="about_text_wrap">
        <h1 class="about_title">About</h1>
        <div class="about_description">
          <p><span>&nbsp;Bio Goes Here&nbsp;</span></p>
        </div>
        <div class="about_body">
          <p>Vivamus iaculis sit amet lorem in blandit. Sed tempor dictum est non luctus. Mauris dapibus nisi a nibh sollicitudin, vel feugiat mi aliquet. Pellentesque luctus nibh interdum urna dictum facilisis. Etiam sagittis ac massa a suscipit. Nunc eget tempus tortor, a condimentum odio. Curabitur congue felis eu ante mollis feugiat. Quisque consequat tristique massa eu consequat. Morbi lorem lacus, bibendum vitae sollicitudin nec, fringilla in ipsum. Nulla scelerisque eget lacus non rhoncus. Sed pellentesque quis ipsum eget placerat. Morbi dignissim ipsum et leo efficitur, non bibendum odio vulputate. Etiam vitae malesuada velit, sed tempor metus.</p>
        </div>

      </div>
    </div>
  </div>




  <div class="client_section">
<div class="client_title">
  <h3 class="client_title_heading">{data.contentfulClients.title}</h3>
</div>
    <div class="client_wrap">
      {data.contentfulClients.clientLogo.map(({ file }) => ( // fixed.src does not work for svg
        <div class="client_logo" id={data.contentfulClients.title}>
        <p>{data.contentfulClients.clientLogo.description}</p>
          <img
            alt={data.contentfulClients.clientLogo.description}
            src={file.url} // fixed.src does not work for svg
            width="150"
          />
        </div>
      ))}
    </div>
  </div>

  </Layout>
)

export const aboutQuery = graphql`
  query aboutQuery {
    contentfulClients(title: {eq: "Clients Worked With"}) {
      title
      clientLogo {
        fixed(quality: 90, width: 200) {
          ...GatsbyContentfulFixed
        }
        title
        description
        file {
          url
        }
      }
    }
    
  }
`
