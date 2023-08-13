import Seo from "../components/Seo"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import *as classes from "../styles/tours.module.css"

const Tours = () => {
    return (
        <Layout>
            <div>
                <h3>Этот раздел в разработке и будет дополняться</h3>
                <div className={classes.wrapperBlockButton}>
                    <Link to={"/tours/mexico"} >
                        <button className={classes.menuButton}>
                            Мексика
                        </button>
                    </Link>
                    <Link to={"/tours/la"} >
                        <button className={classes.menuButton}>
                            Латинская Америка
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Tours

export const Head = () => {
    return <Seo title={"Меню туров по Мексике и Латинской Америке"} description={"Описание рубрики туров по Мексики и Латинской Америке"} robots={"index, follow"} />
}
