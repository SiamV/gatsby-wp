import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
// import *as classes from "../styles/single-travel.module.css";
import Slider from "../components/Slider/Slider";
import MorePost from "../components/MorePost/MorePost";


const SingleTourMexico = ({ data, pageContext}) => {
    const { title, content, images } = data.wpPost
    return (
        <Layout>
            <h1>{title}</h1>
            <Slider data={images.slider} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <h2>Ещё мототуры: </h2>
            <MorePost url={pageContext.urlTours} category={"mexico"} />
        </Layout>
    )
}

export default SingleTourMexico

export const Head = ({ data }) => {
    const { seodata } = data.wpPost
    return < Seo title={seodata.seotitle} description={seodata.seodescription} robots={seodata.robots} />
}

export const query = graphql`
query getPageTravel($urlTours: String) {
  wpPost(slug: {eq: $urlTours}) {
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
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            id
          }
          base
        }
      }
    }
  }
}
`
