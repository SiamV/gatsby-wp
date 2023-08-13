import { Link } from "gatsby"
import React from "react"
import *as classes from "./Navbar.module.css"

const Navbar = () => {

    // на будущее если захоти использовать меню из Вордпресс
    // const mainMenu = useStaticQuery(
    //     graphql`
    //         query getWpMenu {
    //             wpMenu(name: {eq: "mainMenu"}) {
    //                 menuItems {
    //                 nodes {
    //                     id
    //                     label
    //                     url
    //                     childItems {
    //                     nodes {
    //                         url
    //                         label
    //                         id
    //                     }
    //                     }
    //                 }
    //                 }
    //             }
    //         }
    //     `
    // )

    return (
        <div className={classes.navbarMainBlock}>
            <Link to={"/tours"} >
                <button className={classes.menuButton}>
                    Туры
                </button>
            </Link>
            <Link to={"/travels"} >
                <button className={classes.menuButton}>
                    RiderClub
                </button>
            </Link>
        </div>

    )
}

export default Navbar
