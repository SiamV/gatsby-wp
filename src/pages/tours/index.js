import Seo from "../../components/Seo"
import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

const Tours = (props) => {
    return (
        <Layout>
            <div>
                <Link to={"/tours/mexico"}>Туры по Мексике</Link>
                <Link to={"/tours/la"}>Туры по Латинской Америке</Link>
            </div>
        </Layout>
    )
}

export default Tours

export const Head = () => (
    <Seo title="Page Tours" description={"tours description"}/>
  )
