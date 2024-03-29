import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
import Layout from "../components/layout"
// import Video from "../components/video"
import Seo from "../components/seo"

import "../components/style/work.css"

/*
Note:
Once you make changes in Contentful editor,
you need to restart your development server.
*/

const contentData = ({ data }) => (

  <Layout>
    <Seo title={data.contentfulBlog.title} />
    <div className="work_inner">

      <div className="work_info">
        <div className="work_text_wrap">
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

      <div className="work_gallery">
        <div className="work_items">

            {data.contentfulBlog.articleImage.map(({ file, description }, i) => (
              <div className="work_item" key={'item_' + i} >

                    {description.length ? (
                      <div className="work_item-desc_bg">
                        <div className="work_item-desc">
                          <div className="work_item-desc_txt" key={'desc_' + i} >{description}</div>
                        </div>
                      </div>
                    ): (
                      // no desc
                      null
                    )
                  }

                  {file.contentType === "image/jpeg" ? (

                    <GatsbyImage 
                      className="work_img"
                      image={data.contentfulBlog.articleImage[i].gatsbyImageData}
                      alt={data.contentfulBlog.title + '_' + i}
                      key={'image_' + i}
                    />

                  ): (

                  //  if video
                      //autoPlay loop
                    <video autoPlay loop muted playsInline className="work_video">
                      <source src={file.url} type="video/mp4"></source>
                    </video>
                  )
                }

              </div>

            ))}

        </div>
      </div>

    </div>
  </Layout>
)
export default contentData

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
      description {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: AUTO
        )
      }
      articleImage {
        id
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
        )
        description
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
