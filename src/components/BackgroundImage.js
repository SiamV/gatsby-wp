import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import *as classes from "./BackGroundImage.module.css"

const BackgroundImage = () => {
    return (
        <StaticImage
            placeholder="blurred"
            src="../images/bandera-mexico.png"
            alt="background"
            formats={["AUTO", "WEBP", "AVIF"]}
            className={classes.wrapperBackgroundImg}
        />
    )
}

export default BackgroundImage
