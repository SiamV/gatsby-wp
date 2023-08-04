import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import *as classes from "../styles/single-travel.module.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

const SinglePostTravel = ({ data }) => {
  const { title, content, images } = data.wpPost

  return (
    <Layout>
      <h1>{title}</h1>
      <div >
        <Carousel>
          {images.slider.map((img) => (
            <Carousel.Item key={img.localFile.childImageSharp.id}>
              <GatsbyImage
                placeholder="blurred"
                image={getImage(img.localFile.childImageSharp.gatsbyImageData)}
                alt={"slider"} //change for SEO
                formats={["AUTO", "WEBP", "AVIF"]}
                layout="constrained"
                //   className={classes.wrapperSlider}
                style={{ maxWidth: `400px`, maxHeight: `400px` }}
              // layout="fullWidth"
              // breakpoints = {[300, 750, 1080]}
              />
            </Carousel.Item>
          )
          )}
        </Carousel>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default SinglePostTravel

export const Head = ({ data }) => {
  const { seodata } = data.wpPost
  return < Seo title={seodata.seotitle} description={seodata.seodescription} robots={seodata.robots} />
}

export const query = graphql`
query getPageTravel($url: String) {
  wpPost(slug: {eq: $url}) {
    seodata {
      seotitle
      seodescription
      robots
    }
    title
    content
    images {
      slider {
        localFile {
          childImageSharp {
            gatsbyImageData
            id
          }
        }
      }
    }
  }
}
`


// export const query = graphql`
// query getPageTravel($url: String) {
//   wpPost(slug: {eq: $url}) {
//     seodata {
//       seotitle
//       seodescription
//       robots
//     }
//     title
//     content
//     images {
//       imagesForSlider {
//         localFile {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//       imagesForSlider2 {
//         localFile {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// }
// `
