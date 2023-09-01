import React from 'react';
import * as classes from './Footer.module.css';
import Telegram from "../common/SocialBlocks/Telegram";
import WhatsApp from "../common/SocialBlocks/WhatsApp"

const Footer = ({titleTour}) => {
    return (
        <div className={classes.wrapperFooter}>
            <WhatsApp titleTour={titleTour} />
            <Telegram titleTour={titleTour} />
        </div>
    )
}

export default Footer;
