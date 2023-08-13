import React from 'react';
import * as classes from './Footer.module.css';
import Telegram from "../common/SocialBlocks/Telegram";
import WhatsApp from "../common/SocialBlocks/WhatsApp"

const Footer = () => {
    return (
        <div className={classes.wrapperFooter}>
            <WhatsApp />
            {/* <div className={classes.wrapperText}> Общаемся в чате:</div> */}
            <Telegram />
        </div>
    )
}

export default Footer;
