const path = require('path')

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};

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
                  }
                }
              }
            }
          }
        `).then(results => {

            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                
                createPage ( {
                    path: `/posts${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/postLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
            })

            const posts = results.data.allMarkdownRemark.edges
            const postsPerPage = 9;
            const numPages = Math.ceil(posts.length / postsPerPage);

            Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/` : `/${i + 1}`,
                component: path.resolve("./src/components/postListing.js"),
                context: {     
                     limit: postsPerPage,      
                     skip: i * postsPerPage,
                     numPages,      
                     currentPage: i + 1    }  });
  });

            resolve( );
        })
    });  
};

