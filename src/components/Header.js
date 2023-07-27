import React from "react"
import Navbar from "./Navbar"
import * as classes from "./Header.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
        <div className={classes.headerPage}>
            {/* for dynamic images <GatsbyImage image={props.image} alt={props.image.name}/>*/}
            <StaticImage
                placeholder="blurred"
                src="../images/logo-moto.png"
                alt="logo"
                formats={["AUTO", "WEBP", "AVIF"]}
                style={{ width: `80px` }}
            />
            <Navbar />
        </div>

    )
}

export default Header
