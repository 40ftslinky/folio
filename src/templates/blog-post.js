import React from 'react'
import img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import "../components/work.css"


export default ({ data }) => (



  <Layout>
    <div className="work_inner">


      <div class="work_info">
        <div class="work_text_wrap">
          <h1 className="work_title">{data.contentfulBlog.title}</h1>
          <div
            className="work_description"
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlog.description.childMarkdownRemark.html,
            }}
          />
          <div
            className="work_body"
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlog.body.childMarkdownRemark.html,
            }}
          />
          </div>
        </div>

        <div className="work_hero_image_wrap">
          <img src={data.contentfulBlog.heroImage.fluid.src} alt={data.contentfulBlog.title + '_hero'}/>
        </div>

        <div className="work_gallery">
          <div class="work_items">
            {data.contentfulBlog.articleImage.map(({ fluid }) => (
              <div class="work_item">
                <img alt={data.contentfulBlog.title + '_item'} key={fluid.src} src={fluid.src} />
              </div>
            ))}
          </div>
        </div>


      </div>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      description{
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid(maxHeight: 1080, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
      articleImage {
        fluid(maxHeight: 1080, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
