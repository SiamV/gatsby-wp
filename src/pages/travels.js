import Seo from "../components/Seo"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import *as classes from "../styles/travels.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Travels = ({ data }) => {
  const postsTravel = data.allWpPost.nodes

  return (
    <Layout>
      <h2> Предстоящие мероприятия:</h2>
      <div className={classes.wrapperNotice}>
        30 июня едем по маршруту Канкун-Эль Куйо
      </div>
      <h2> Наши прошлые поездки:</h2>
      <div className={classes.wrapperPosts}>
        {postsTravel.map(post => <div key={post.databaseId} className={classes.wrapperOnePost}>
          <div className={classes.wrapperImage}>
            <GatsbyImage
              image={getImage(post.featuredImage.node.localFile.childImageSharp.gatsbyImageData)}
              alt={"image"} //change for SEO
              layout="constrained"
              imgStyle={{objectFit: `cover`}}
              className={classes.gatsbyImage}
            />
          </div>
          <div className={classes.wrapperInfoBlock}>
            <h3>{post.title}</h3>
            <Link to={`/${post.categories.nodes[0].name}/${post.slug}`}>Подробнее...</Link>
          </div>
        </div>)}
      </div>
    </Layout>
  )
}

export default Travels

export const Head = () => (
  <Seo title="Наши поездки по Юкатану на мото" description={"Собираемся компанией в Канкуне и катаем на мото по Юкатану"} robots={"noindex, nofollow"}/>
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
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  }
}
`
