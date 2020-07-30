import React from 'react'
import img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
// import Video from "../components/video"
import SEO from "../components/seo"

/*
Note:
Once you make changes in Contentful editor,
you need to restart your development server.
*/

export default ({ data }) => (

  <Layout>
    <SEO title="Work" />
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

            {data.contentfulBlog.articleImage.map(({ file, description, fluid }, i) => (
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

                    <img className="work_img"
                      alt={data.contentfulBlog.title + '_' + i}
                      key={'image_' + i}
                      // src={file.url}
                      src={fluid.src}
                      // fluid={data.contentfulBlog.articleImage[i].fluid.src}
                    />

                  ): (

                  //  if video
                      //autoPlay loop
                    <video autoPlay muted playsInline className="work_video">
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
        fluid(maxHeight: 1080, quality: 75) {
          ...GatsbyContentfulFluid
        }
      }
      articleImage {
        id
        fluid(maxHeight: 1080, quality: 75) {
          ...GatsbyContentfulFluid
        }
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
