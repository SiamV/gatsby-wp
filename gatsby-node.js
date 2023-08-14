const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getUrlPostsTravels {
        allWpPost{
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
    const categoryName = node.categories.nodes[0].name

    if (categoryName === "travels") {
      actions.createPage({
        path: `/${categoryName}/${node.slug}`,
        component: path.resolve("src/templates/single-travel.js"),
        context: { url: node.slug }
      })
    } else if (categoryName === "mexico") {
      actions.createPage({
        path: `/${categoryName}/${node.slug}`,
        component: path.resolve("src/templates/single-mexico.js"),
        context: { urlTours: node.slug }
      })
    }

  })
}
