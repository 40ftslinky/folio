import React from 'react'
import Img from 'gatsby-image'

class Gallery extends React.Component {
  render() {
    const { images } = this.props
    return (
      <div>
          {images.map((img, idx) => (

                <Img fluid={img.node.childImageSharp.fluid}/>

          ))}
      </div>
    );
  }
}

export default Gallery
