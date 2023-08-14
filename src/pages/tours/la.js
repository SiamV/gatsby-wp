import Seo from "../../components/Seo"
import React from "react"
import Layout from "../../components/Layout"

const LatinaAmerica = () => {
    return (
        <Layout>
            <div>
                <h2>Туры по Латинской Америке</h2>
                <h3>Этот раздел в разработке и будет дополняться</h3>
            </div>
        </Layout>
    )
}

export default LatinaAmerica

export const Head = () => {
    return <Seo title={"Список туров по Латинской Америке"} description={"Предлагаемые туры на мотоциклах по Литинской Америке"} robots={"index, follow"} />
}
