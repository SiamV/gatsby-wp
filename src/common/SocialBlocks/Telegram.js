import React from 'react';
import * as classes from './SocialBlocks.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Telegram = () => {
    return (
        <div className={classes.wrapperImgSocial}>
            {/* <a href="https://t.me/ivamex" rel="nofollow"> */}
            <StaticImage
                placeholder="blurred"
                src="../../images/telegram-v2.png"
                alt="Telegram"
                formats={["AUTO", "WEBP", "AVIF"]}
                className={classes.imgSocial}
            />
            {/* </a> */}
        </div>
    )
}

export default Telegram;
