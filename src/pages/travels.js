import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import *as classes from "../styles/travels.module.css";

const Travels = ({ data }) => {
  const postsTravel = data.allWpPost.nodes

  return (
    <Layout>
      <h2> Предстоящие мероприятия:</h2>
      <div className={classes.wrapperNotice}>

          В RiderClub собираемся чтобы просто покатать по Юкатану в компании друзей кто живет в Канкуне, Плайя Дель Кармен или другой части Карибского побережья Мексики.

      </div>
      <h2> Наши прошлые поездки:</h2>
      <div className={classes.wrapperPosts}>
        {postsTravel.map(post => <div key={post.databaseId} className={classes.wrapperOnePost}>
          <Link to={`/${post.categories.nodes[0].name}/${post.slug}`} className={classes.myLinkTravel}>
            <div className={classes.wrapperImage}>
              <GatsbyImage
                image={getImage(post.featuredImage.node.localFile.childImageSharp.gatsbyImageData)}
                alt={"image"} //change for SEO
                layout="constrained"
                imgStyle={{ objectFit: `contain` }}
                className={classes.gatsbyImage}
              />
            </div>
            <div className={classes.wrapperInfoBlock}>
              <h3>{post.title}</h3>
              <p>Подробнее...</p>
            </div>
          </Link>
        </div>)}
      </div>
    </Layout>
  )
}

export default Travels

export const Head = () => {
  return <Seo title="Наши поездки по Юкатану на мото" description={"Собираемся компанией в Канкуне и катаем на мото по Юкатану"} robots={"noindex, nofollow"} />
}

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
              )
            }
          }
        }
      }
    }
  }
}
`
