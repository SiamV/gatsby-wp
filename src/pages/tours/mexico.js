import Seo from "../../components/Seo"
import React from "react"
import Layout from "../../components/Layout"

const Mexico = () => {
    return (
        <Layout>
            <div>
                <h3>Туры по Мексике</h3>
            </div>
        </Layout>
    )
}

export default Mexico

export const Head = () => {
    return <Seo title="Туры по Мекиске" description={"Туры на мотоцикле по Мексике"} robots={"index, follow"}/>
}
