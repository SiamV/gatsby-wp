import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import *as classes from "../styles/single-page.module.css";
import Slider from "../components/Slider/Slider";
import MorePost from "../components/MorePost/MorePost";


const SinglePostTravel = ({ data, pageContext }) => {
  const { title, content, images } = data.wpPost
  console.log(content)

  return (
    <Layout>
      <h1>{title.toUpperCase()}</h1>
      <Slider data={images.slider} />
      <div dangerouslySetInnerHTML={{ __html: content }} className={classes.wrapperContent} />
      <br />
      <hr />
      <h3>Похожие поездки: </h3>
      <MorePost url={pageContext.url} category={"travels"} />
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
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            id
          }
          base
        }
        altText
        description
        caption
      }
    }
  }
}
`
