import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/style/about.css"

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Inline = ({ children }) => <span className="inline_src">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>

const aboutData = ({ data }) => {
  // https://github.com/Khaledgarbaya/rich-text-gatsby/blob/master/src/pages/index.js
  const aboutRichContent = data.allContentfulAbout.nodes[0]
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="heading1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="heading2">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="heading4">{children}</h4>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img alt={``} src={`https:${node.data.target.fields.file["en-US"].url}`} />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
        <div className="emb_entry">${children(node.content)}</div>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="copy">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (<ul>{children}</ul>),
      [BLOCKS.OL_LIST]: (node, children) => (<ol>{children}</ol>),
      [BLOCKS.LIST_ITEM]: (node, children) => (<li>{children}</li>),
      [BLOCKS.QUOTE]: (node, children) => (<blockquote>{children}</blockquote>),
      [BLOCKS.HR]: () => (<hr/>),
    },
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => `<i>${text}</i>`,
      [MARKS.UNDERLINE]: text => `<u>${text}</u>`,
      [MARKS.CODE]: text => `<code>${text}</code>`,
    },
    renderInline: {
      // [INLINES.ASSET_HYPERLINK]: node => (INLINES.ASSET_HYPERLINK, node as Inline),
      // [INLINES.ENTRY_HYPERLINK]: node => (INLINES.ENTRY_HYPERLINK, node as Inline),
      // [INLINES.EMBEDDED_ENTRY]: node => (INLINES.EMBEDDED_ENTRY, node as Inline),
      // [INLINES.HYPERLINK]: (node, children) => `<a href="${node.data.uri}">${children(node.content)}</a>`,
      [INLINES.HYPERLINK]: (node, children) => (
        <Inline><a className="inline_link" href={`https:${node.data.uri}`}>${children(node.content)}</a></Inline>
      ),
    },
  }

  return  (
    <Layout>

    <Seo title="About" />

    <section className="about_inner">
      <div className="about_info">
        <div className="about_text_wrap section_wrap">
          <h1 className="about_title">{data.contentfulAbout.title}</h1>
          {/* <div className="about_description">
            <p><span>&nbsp;Bio Goes Here&nbsp;</span></p>
          </div> */}
          <div className="about_copy">
            {documentToReactComponents(JSON.parse(aboutRichContent.description.raw, options))}
          </div>
        </div>
      </div>
    </section>

    <section className="client_section" id="clients">
      <div className="client_title section_wrap">
        <h3 className="client_title_heading">{data.contentfulClients.title}</h3>
      </div>
      <div className="client_wrap section_wrap">
          {data.contentfulClients.clientLogo.map(({ file, index }) => ( // fixed does not work for svg
            <div className="client_logo">
              <img
                alt={data.contentfulClients.clientLogo.title}
                src={file.url} 
                // fixed.src does not work for svg
                width="150"
              />
              {/* <GatsbyImage image={data.contentfulClients.clientLogo.gatsbyImageData} alt={data.title} /> */}
            </div>
          ))}
      </div>
    </section>

    </Layout>
  )
};
export default aboutData;



// run the template query
export const aboutQuery = graphql`
  query aboutQuery {
    contentfulClients(title: {eq: "Clients Worked With"}) {
      title
      clientLogo {
        gatsbyImageData(
          placeholder: BLURRED
        )        
        title
        description
        file {
          url
        }
      }
    }
    allContentfulAbout {
      nodes {
        title
        description {
          raw
        }
      }
    }
    contentfulAbout {
      title
    }
  }
`

// You may use special comments to disable some warnings.
// Use
// eslint-disable-next-line
// to ignore the next line.
// Use
/* eslint-disable */
// to ignore all warnings in a file.
