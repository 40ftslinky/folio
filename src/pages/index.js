import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({node}) => {
  return (
    <article class="work_feed-item">
      <div class="work_feed_container">
        <figure class="work_feed-bg" id={node.title} style={{ }} >
          <img src={node.heroImage.fluid.src} alt={node.title} />
        </figure>
        <div class="work_feed-info">
          <Link to={node.slug}>
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
    <SEO title="Home" />
    <section>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
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
              fluid(maxHeight: 1080, quality: 90) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
    }
   }
`
