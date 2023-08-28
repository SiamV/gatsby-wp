import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import *as classes from "../../styles/travels.module.css";

const Mexico = ({ data }) => {
    const postsTravel = data.allWpPost.nodes
    return (
        <Layout>
            <div>
                <h1>МОТОТУРЫ ПО МЕКСИКЕ</h1>
                <div className={classes.wrapperPosts}>
                    {postsTravel.sort((a, b) => a.sort.sort - b.sort.sort).map(post => <div key={post.databaseId} className={classes.wrapperOnePost}>
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
            </div>
        </Layout>
    )
}

export default Mexico

export const Head = () => {
    return <Seo title="Туры по Мекиске" description={"Туры на мотоцикле по Мексике"} robots={"index, follow"} />
}

export const query = graphql`
query MyQuery {
  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "mexico"}}}}}) {
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
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
      }
      sort {
        sort
      }
    }
  }
}
`
