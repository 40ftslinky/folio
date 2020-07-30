import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPost = ({node}) => {
  return (
    <article className="work_feed-item">
      <div className="work_feed_container">
        <figure className="work_feed-bg" id={node.title} style={{ }} >
          <img src={node.heroImage.fluid.src} alt={node.title} />
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
    <SEO title="Home" />
    <section>
      {data.allContentfulBlog.edges.map((edge,i) => <BlogPost node={edge.node}  key={'proj' + i} />)}
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
              fluid(maxHeight: 1080, quality: 75) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
    }
   }
`
