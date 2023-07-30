import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

const SinglePostTravel = ({ data }) => {
    const { title, content } = data.wpPost
    // const img = getImage("")

    return (
        <Layout>
            <Seo title={title} description={"travels description"} />
            <h1>{title}</h1>
            {/* <div>
                <GatsbyImage img={img} alt={title} />
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export default SinglePostTravel

export const query = graphql`
    query getPageTravel($url : String) {
        wpPost(slug: {eq: $url}) {
            title
            content
        }
    }
`
