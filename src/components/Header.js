import React from "react"
import Navbar from "./Navbar"
import * as classes from "./header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
        <div className={classes.headerPage}>
            {/* for dynamic images <GatsbyImage image={props.image} alt={props.image.name}/>*/}
            <StaticImage
                placeholder="blurred"
                src="../images/icon.png"
                alt="logo"
                formats={["AUTO", "WEBP", "AVIF"]}
                style={{ width: `50px` }}
            />
            <Navbar />
        </div>

    )
}

export default Header
