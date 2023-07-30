const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query getUrlPostsTravels {
        allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "travels"}}}}}) {
            nodes {
              slug
              categories {
                nodes {
                  name
                }
              }
            }
        }
    }
    `)

    data.allWpPost.nodes.forEach(node => {
        // const { url } = node.slug
        // const { category } = node.categories.nodes[0].name
        actions.createPage({
            path: `/${node.categories.nodes[0].name}/${node.slug}`,
            component: path.resolve("src/templates/single-travel.js"),
            context: { url: node.slug }
        })
    })
}
