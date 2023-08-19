import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import *as classes from "../styles/tours.module.css";
import *as classes2 from "../styles/single-page.module.css";

const Tours = ({ data }) => {
    const { content } = data.wpPage
    return (
        <Layout>
            <div>
                <h1>Мототуризм в Мексике и Латинской Америке.</h1>
                <div className={classes.wrapperBlockButton}>
                    <Link to={"/tours/mexico"} >
                        <button className={classes.menuButton}>
                            Мексика
                        </button>
                    </Link>
                    <Link to={"/tours/la"} >
                        <button className={classes.menuButton}>
                            Латинская Америка
                        </button>
                    </Link>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: content }}
                    className={classes2.wrapperContent}
                />
            </div>
        </Layout>
    )
}

export default Tours

export const Head = ({ data }) => {
    const { seodata } = data.wpPage
    return < Seo title={seodata.seotitle} description={seodata.seodescription} robots={seodata.robots} />
}


export const query = graphql`
query getPage {
  wpPage(slug: {eq: "tours"}) {
    seodata {
      seotitle
      seodescription
      robots
    }
    title
    content
  }
}
`
