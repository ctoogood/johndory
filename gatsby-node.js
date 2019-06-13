const path = require('path')


exports.createPages = ( { graphql, actions} ) => {
    const { createPage } = actions;
    return new Promise( ( resolve, reject ) => {
        graphql(`
        {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ){
              edges {
                node {
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                    category
                  }
                }
              }
            }
          }
        `).then(results => {

            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                if(node.frontmatter.category === 'feature') {
                  createPage ( {
                    path: `/features${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/featureLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
                }
                else {
                  createPage ( {
                    path: `/posts${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/postLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
                }
                
            })

            resolve( );
        })
    });  
};

