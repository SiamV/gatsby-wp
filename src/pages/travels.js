import Seo from "../components/Seo"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Travels = ({ data }) => {
    const postsTravel = data.allWpPost.nodes
    return (
        <Layout>
            <div>
                {postsTravel.map(post => <div key={post.databaseId}>
                    <Link to={`${post.link}`}>{post.title}</Link>
                </div>)}
            </div>
        </Layout>
    )
}

export default Travels

export const Head = () => (
    <Seo title="Page Travels" description={"travels description"} />
)

export const query = graphql`
    query MyQuery {
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "travels"}}}}}) {
            nodes {
              title
              link
              databaseId
            }
          }
    }
`
