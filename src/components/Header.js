import React from "react"
import Navbar from "./Navbar"
import Logo from "./Logo/Logo"
import * as classes from "./Header.module.css"

const Header = () => {
    return (
        <div className={classes.headerPage}>
            <Logo />
            <Navbar />
        </div>

    )
}

export default Header
