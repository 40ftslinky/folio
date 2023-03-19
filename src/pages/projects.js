import React from "react"
import styled from "styled-components"
// import { Link } from "react-scroll"
import { Link } from "gatsby"
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import Intro from "../components/intro"
import Seo from "../components/seo"

import "../components/style/projects.css"

import "../components/style/home.css"
import "../components/style/buttons.css"

const Sect = styled.section`
    max-height: 70vh;
`
const TitleArea = styled.div`
    width: 90%;
    max-width: 90vw;
    margin: 2rem auto;
    clear: both;
    // 
    @media (min-width: 80em) {
        max-width: 1200px;
    }
    //
    grid-column: 1 / 4;
    @media (min-width: 768px) {
        grid-column: 1 / 2;
    }
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 2.125rem;
`

const ContentArea = styled.div`
    grid-column: 1/4;
    @media (min-width: 768px) {
        grid-column: 2 / 3;
        p {
            margin-top: 0;
        }
    }
`

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
const ProjectsPage = ({data}) => (
  <Layout>
    <Seo title="Projects" />

    {/* <Intro></Intro> */}

    <Sect
        id={"_section"}
        className={"_section"}
    >
        <TitleArea className={"_inner"}>
            <div className={"_info"}>

                <Title className={"_title"}>
                    Projects
                </Title>

                <ContentArea className={"_content"}>
                    {/* Content goes here */}
                    A few of our most impressive recent projects.
                </ContentArea>

                <Link 
                    className={"btn"}
                    to="#projects" 
                    smooth={true} 
                    duration={500}
                >
                    View Projects
                </Link>

            </div>
        </TitleArea>
    </Sect>

    <section id="projects"> 
      {data.allContentfulBlog.edges.map((edge,i) => 
        <Projects 
          node={edge.node}  
          key={'proj' + i} />
        )}
    </section>
  </Layout>
)
export default ProjectsPage

export const projectsQuery = graphql`
  query projectsQuery {
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
