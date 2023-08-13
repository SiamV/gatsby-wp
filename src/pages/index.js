import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Slider from "../components/Slider/Slider";
import *as classes from "../styles/mainPage.module.css";

const HomePage = ({ data }) => {
  const { content, images } = data.wpPage
  return (
    <Layout>
      <h1>
        Путешествия на мотоцикле по Мексике и Латинской Америке.
      </h1>
      <Slider data={images.slider} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={classes.wrapperMainContent}
        priority="true"
      />
    </Layout>
  )
}

export default HomePage

export const Head = ({ data }) => {
  const { seodata } = data.wpPage
  return < Seo title={seodata.seotitle} description={seodata.seodescription} robots={seodata.robots} />
}


export const query = graphql`
query getPage {
  wpPage(slug: {eq: "main-page"}) {
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
