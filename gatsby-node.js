const path = require('path');

// This onCreateNode Gatsby API call creates a new 'node' or a thing to be able to
// manipulate as needed for the project. This particular piece of code will gather the
// 'slug' data information from each episode ( markdown file as currently implemented)
// so that we can use this to create a new page/ URL name based on the slug. This is
// the first step in an effort to build auto-generation of a new podcast episode capibility.
// ex. episode1.md -> episode1 -> our-page-url/episodes/episode1

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){

        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

// This createPages Gastby API creates new pages based on our source data that is
// provided. It uses the episode page template created in /templates/episode.js,
// markdown slug data for each episode,and the createPage action to create the new page.
module.exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions
     //1. Get path to template
    const episodeTemplate = path.resolve('./src/templates/episode.js')
    //2. Get markdown data, (slugs) to create the new pages based on the slugs
    const res = await graphql(`
        query{
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    //3. Dynamically create new pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: episodeTemplate,
            path:`/episode/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
}
