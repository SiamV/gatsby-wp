import React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"

const Seo = ({ title, description, children, robots, property }) => {
    const { title: defaultTitle,
        description: defaultDescription,
        robots: defaultRobots
    } = useSiteMetadata()

    const seoData = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        robots: robots || defaultRobots, //"index,follow" or "noindex, nofollow"
    }

    return (
        <>
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
            <meta name="robots" content={seoData.robots} />
            {children}
        </>
    )
}

export default Seo
