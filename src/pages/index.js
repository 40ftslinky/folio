import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Seo from "../components/seo"


const BlogPost = ({node}) => {
  return (
    <article className="work_feed-item">
      <div className="work_feed_container">
        <figure className="work_feed-bg" id={node.title} style={{ }} >
          {/* <img src={node.heroImage.fluid.src} alt={node.title} /> */}
          <GatsbyImage image={node.heroImage.gatsbyImageData} alt={node.title} />

        </figure>
        <div className="work_feed-info">
          <Link to={node.slug}>
          {/*<Link to={`/${node.slug}/`}>*/}
          <div>
          <div><h3>{node.title}</h3></div>
          <div>{node.body.childMarkdownRemark.excerpt}</div>
          </div>
          </Link>
        </div>
      </div>
    </article>
  )
}
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    
    <Intro></Intro>

    <section id="projects"> 
      {data.allContentfulBlog.edges.map((edge,i) => <BlogPost node={edge.node}  key={'proj' + i} />)}
    </section>
  </Layout>
)
export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  allContentfulBlog (
  filter: {
    node_locale: {eq: "en-US"}
  },
  sort:{ fields: [publishDate], order: DESC }
  ) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
