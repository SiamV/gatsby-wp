import React from "react";
import { Link } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import *as classes from "../../styles/single-page.module.css";

const LatinaAmerica = () => {
    return (
        <Layout>
            <div>
                <h1>ТУРЫ ПО ЛАТИНСКОЙ АМЕРИКЕ</h1>
                <h2>Этот раздел в разработке и будет дополняться</h2>
            </div>
            <h3>Вернуться в рубрику туров:</h3>
            <Link to={`/tours`}>
                <button className={classes.buttonTours}>Назад</button>
            </Link>
        </Layout>
    )
}

export default LatinaAmerica

export const Head = () => {
    return <Seo title={"Список туров по Латинской Америке"} description={"Предлагаемые туры на мотоциклах по Литинской Америке"} robots={"index, follow"} />
}
