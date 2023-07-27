import React from 'react';
import * as classes from './SocialBlocks.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Instagram = () => {
    return (
        <div className={classes.wrapperImgSocial}>
            <a href="https://www.instagram.com/mexicoline.ru">
            <StaticImage
                placeholder="blurred"
                src="../../images/instagram-v2.png'"
                alt="Instagram"
                formats={["AUTO", "WEBP", "AVIF"]}
                className={classes.imgSocial}
            />
            </a>
        </div>
    )
}

export default Instagram;
