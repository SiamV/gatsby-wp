import React from 'react';
import VkAppImg from '../../images/vk-v2.png';
import classes from './SocialBlocks.module.css'

const Vkontakte = (props) => {
    return (
        <div className={classes.wrapperImgSocial}>
            <a href="https://vk.com/toursandguide" rel="nofollow">
                <img src={VkAppImg} alt='VK' className={classes.imgSocial}/>
            </a>
        </div>
    )
}

export default Vkontakte;
