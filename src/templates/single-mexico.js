import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import *as classes from "../styles/single-page.module.css";
import Slider from "../components/Slider/Slider";
import MorePost from "../components/MorePost/MorePost";
import CountPrice from "../components/CountPrice/CountPrice";


const SingleTourMexico = ({ data, pageContext }) => {
  const { title, content, images, price } = data.wpPost
  return (
    <Layout>
      <h1>{title.toUpperCase()}</h1>
      <Slider data={images.slider} />
      <div dangerouslySetInnerHTML={{ __html: content }} className={classes.wrapperContent} />
      <CountPrice price={price} />
      <h3> Заказать этот тур можно по контактам внизу экрана</h3>
      <br />
      <hr />
      <h3>Ещё мототуры: </h3>
      <MorePost url={pageContext.urlTours} category={"mexico"} />
      <Link to={`/tours/mexico`}>
        <button className={classes.buttonTours}>Назад к списку туров</button>
      </Link>
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
    price {
        currentPayForMoto
        income
        priceForGuidePerDay
        priceHotel
        pricePerDayPerPerson
        priceRentMoto
        amountDays
        amountNights
    }
  }
}
`
