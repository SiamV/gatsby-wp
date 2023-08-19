import React from 'react';
import * as classes from './Footer.module.css';
import Telegram from "../common/SocialBlocks/Telegram";
import WhatsApp from "../common/SocialBlocks/WhatsApp"

const Footer = () => {
    return (
        <div className={classes.wrapperFooter}>
            <WhatsApp />
            <Telegram />
        </div>
    )
}

export default Footer;
