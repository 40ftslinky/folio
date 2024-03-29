import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Seo from "../components/seo"

import "../components/style/projects.css"
import "../components/style/highlights.css"

import "../components/style/home.css"
import "../components/style/buttons.css"


const Highlights = ({node}) => {
  return (
      <article className="highlights-item">
        <div className="highlights_container">
          <div className="highlights-img_wrapper" id={node.title} style={{ }} >
            {/* <img src={node.heroImage.fluid.src} alt={node.title} /> */}
            {/* <GatsbyImage image={node.highlightImage.gatsbyImageData} alt={node.title} /> */}
            {/* svg or image */}
            {node.highlightImage.file.contentType === "image/jpeg" ? (

              <GatsbyImage 
                className="highlights-img"
                image={node.highlightImage.gatsbyImageData} 
                alt={node.title} />

              ): (

              //  if svg (if not jpeg)
                <img 
                  className="highlights-img"
                  src={node.highlightImage.file.url} 
                  type="svg" 
                  alt={node.highlightImage.file.fileName}>                   
                </img>
              )
            }

          </div>
          <div className="highlights-info">
            {/* <Link to={node.slug}> */}
                <div className="highlights-info_wrapper">
                    <div className="titlearea">
                        <h2 className="title">{node.title}</h2>
                    </div>
                    <div>
                      {/* {node.description.childMarkdownRemark.excerpt} */}
                      {node.description.description}
                    </div>
                </div>
            {/* </Link> */}
          </div>
        </div>
      </article>
  )
}


const Projects = ({node}) => {
  return (
    <article className="work_feed-item">
      <div className="work_feed_container">
        <figure className="work_feed-bg" id={node.title} style={{ }} >
          {/* <img src={node.heroImage.fluid.src} alt={node.title} /> */}
          <GatsbyImage image={node.heroImage.gatsbyImageData} alt={node.title} />

        </figure>
        <div className="work_feed-info">
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
    <Seo title="Home" />
    
    <Intro></Intro>

    <section className="highlights_sect"> 

      {data.allContentfulHighlights.edges.map((edge,i) => 
      
        <Highlights 
            node={edge.node}  
            key={'highlight' + i} />
        )}

    </section>


    <section id="projects"> 
      {data.allContentfulBlog.edges.map((edge,i) => 
        <Projects 
          node={edge.node}  
          key={'proj' + i} 
        />
      )}
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
    allContentfulHighlights (
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort:{ 
        fields: [publishDate], order: DESC }
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
          description {
            childMarkdownRemark {
            excerpt
            }
            description
          }
          highlightImage {
            gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            )
            file {
              fileName
              url
              contentType
            }
          }
        }
      }
    }
  }
`
