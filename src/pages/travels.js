import Seo from "../components/Seo"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const Travels = ({ data }) => {
    const postsTravel = data.allWpPost.nodes
    return (
        <Layout>
            <h2> Предстоящие мероприятия:</h2>
            <div>
                30 июня едем по маршруту Канкун-Эль Куйо
            </div>
            <h2> Наши прошлые поездки:</h2>
            <div>
                {postsTravel.map(post => <div key={post.databaseId}>
                    <Link to={`/${post.categories.nodes[0].name}/${post.slug}`}>{post.title}</Link>
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
              databaseId
              slug
              categories {
                nodes {
                  name
                }
              }
            }
          }
    }
`
