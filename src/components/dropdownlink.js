import React from "react"
import { StaticQuery, graphql } from "gatsby"

const DropDownLink = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allContentfulBlog(limit: 10) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={data => {
        return  data.allContentfulBlog.edges.map((edge,i) => {
          return (
            <li className="menu_item-dropdown" key={'m_i-d' + i}>
            <a
              href={'../' + edge.node.slug}
              className="dropdown-item"
            >
              {edge.node.title}
            </a>
            </li>
          )
        })
      }}
    />
  )
};
export default DropDownLink;
