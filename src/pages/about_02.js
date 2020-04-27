import React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
//import Image from "../components/image"

const clientList = ({node}) => {
  return (
    <div class="client_logo" id="">
      <p>{node.clientLogo.description.childMarkdownRemark.excerpt}</p>
      <img
        alt={node.clientLogo.title}
        src={node.clientLogo.file.url} // fixed.src does not work for svg
        width="150"
      />
    </div>
  )
}
const AboutPage = ({data}) => (

<Layout>
  <div class="about_inner">
    <div class="about_info">
      <div class="about_text_wrap section_wrap">
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
    <div class="client_title section_wrap">
      <h3 class="client_title_heading">TITLE</h3>
    </div>
    <div class="client_wrap section_wrap">
      {data.allContentfulClients.edges.map((edge) => <clientList node={edge.node} />)}
    </div>
  </div>

</Layout>
)

export default AboutPage


export const aboutQuery02 = graphql`
   query aboutQuery02 {
    allContentfulClients(filter: {clientLogo: {}}) {
      edges {
        node {
          title
          clientLogo {
            description
            file {
              url
            }
            title
          }
        }
      }
    }
   }
`

//
/*
<div>
  {data.allContentfulClients.nodes.map((node) => <BlogPost node={edge.node} />)}
</div>

query aboutQuery02 {
  allContentfulClients {
    nodes {
      clientLogo {
        file {
          url
        }
      }
    }
  }
}
*/
