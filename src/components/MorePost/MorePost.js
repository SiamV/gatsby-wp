import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import *as classes from "../../styles/travels.module.css";

const MorePost = ({ url, category }) => {

    const data = useStaticQuery(graphql`
    query getAllPosts {
        allWpPost {
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
  `)

    const { nodes } = data.allWpPost
    const posts = nodes.filter(it => it.categories.nodes[0].name === category)
    const currentIndex = posts.findIndex(i => i.slug === url)
    const lastIndex = posts.length - 1
    let relatedPost = posts[0]
    currentIndex === lastIndex ? relatedPost = posts[0] : relatedPost = posts[currentIndex + 1]

    return (
        <div>
            <div className={classes.wrapperPosts}>
                <div className={classes.wrapperOnePost}>
                    <Link
                        to={`/${relatedPost.categories.nodes[0].name}/${relatedPost.slug}`}
                        className={classes.myLinkTravel}>
                        <div className={classes.wrapperImage}>
                            <GatsbyImage
                                image={getImage(relatedPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData)}
                                alt={"image"} //change for SEO
                                layout="constrained"
                                imgStyle={{ objectFit: `contain` }}
                                className={classes.gatsbyImage}
                            />
                        </div>
                        <div className={classes.wrapperInfoBlock}>
                            <h3>{relatedPost.title}</h3>
                        </div>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default MorePost;
