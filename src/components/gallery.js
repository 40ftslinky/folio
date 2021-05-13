import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

class Gallery extends React.Component {
  render() {
    const { images } = this.props
    return (
      <div>
          {images.map((img, idx) => (

                <GatsbyImage image={img.node.childImageSharp.gatsbyImageData} />

          ))}
      </div>
    );
  }
}

export default Gallery
