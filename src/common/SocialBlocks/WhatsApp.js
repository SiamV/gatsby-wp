import React from 'react';
import * as classes from './SocialBlocks.module.css'
import { StaticImage } from "gatsby-plugin-image"

const WhatsApp = ({ titleTour }) => {
    return (
        <div className={classes.wrapperImgSocial}>
            {titleTour ? <a href={`https://api.whatsapp.com/send?phone=5219983969285&text=Tour:"${titleTour}"`} rel="nofollow">
                <StaticImage
                    placeholder="blurred"
                    src="../../images/whatsapp-v2.png"
                    alt="WhatsApp"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    className={classes.imgSocial}
                    layout="constrained"
                    imgStyle={{ objectFit: `contain` }}
                />
            </a> :
                <a href="https://api.whatsapp.com/send?phone=5219983969285" rel="nofollow">
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/whatsapp-v2.png"
                        alt="WhatsApp"
                        formats={["AUTO", "WEBP", "AVIF"]}
                        className={classes.imgSocial}
                        layout="constrained"
                        imgStyle={{ objectFit: `contain` }}
                    />
                </a>
            }

        </div>
    )
}

export default WhatsApp;
