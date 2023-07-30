import React from "react"
import BackgroundImage from "./BackGroundImage"
import Footer from "./Footer"
import Header from "./Header"
import *as classes from "./Layout.module.css"

const Layout = ({ children }) => {
    return (
        <div className={classes.siteWrapper}>
            <div className={classes.siteWrapperHeader}>
                <Header />
            </div>
            <div className={classes.siteWrapperFeed}>
                {children}
                <BackgroundImage/>
            </div>
            <div className={classes.siteWrapperFooter}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
