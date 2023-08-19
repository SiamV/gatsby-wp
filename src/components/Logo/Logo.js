import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as classes from "./Logo.module.css"


const Logo = () => {
    return (
        <div className={classes.logoWrapper}>
            <Link to={"/"} >
                <StaticImage
                    placeholder="blurred"
                    src="../../images/logo.png"
                    alt="logo"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    className={classes.imgWrapper}
                    layout= "constrained"
                    imgStyle={{objectFit: `contain`}}
                />
            </Link>
        </div>
    )
}

export default Logo
