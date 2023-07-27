import React from 'react';
import * as classes from './Footer.module.css';
import WhatsApp from '../common/SocialBlocks/WhatsApp';
import Telegram from "../common/SocialBlocks/Telegram";

const Footer = () => {
    return (
        <div className={classes.wrapperFooter}>
            <Telegram />
            <WhatsApp />
        </div>
    )
}

export default Footer;
