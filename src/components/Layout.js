import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import *as classes from "./Layout.module.css";

const Layout = ({ children, titleTour }) => {
    return (
        <div className={classes.siteWrapper}>
            <div className={classes.siteWrapperHeader}>
                <Header />
            </div>
            <div className={classes.siteWrapperFeed}>
                {children}
            </div>
            <div className={classes.siteWrapperFooter}>
                <Footer titleTour={titleTour} />
            </div>
        </div>
    )
}

export default Layout
