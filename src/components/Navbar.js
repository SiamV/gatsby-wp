import { Link } from "gatsby"
import React from "react"
import *as classes from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={classes.navbarMainBlock}>
            <Link to={"/tours"} >
                <button className={classes.menuButton}>
                    Туры
                </button>
            </Link>
            <Link to={"/travels"} >
                <button className={classes.menuButton}>
                    Покатушки
                </button>
            </Link>
        </div>

    )
}

export default Navbar
