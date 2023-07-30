import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import *as classes from "./BackGroundImage.module.css"

const BackgroundImage = () => {
    return (
        <StaticImage
            placeholder="blurred"
            src="../images/photo_2023-07-29_14-15-25.jpg"
            alt="background"
            formats={["AUTO", "WEBP", "AVIF"]}
            className={classes.wrapperBackgroundImg}
            // style={{ position: "absolute" }}
        />
    )
}

export default BackgroundImage
