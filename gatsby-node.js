const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = ( { graphql, actions} ) => {
    const { createPage } = actions;

    return new Promise( ( resolve, reject ) => {
        graphql(`
        {
          posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {fields: frontmatter___date, order: DESC}, limit: 1000) {
            edges {
              node {
                frontmatter {
                  slug
                  date
                  title
                }
              }
            }
          }
        }
        `).then(results => {

            const posts = results.data.posts.edges
            const postsPerPage = 16;
            const numPages = Math.ceil(posts.length / postsPerPage);
            const categories = []
            const tags = []

            const features = results.data.posts.edges;
            const numFeaturePages = Math.ceil(features.length/postsPerPage);

              

            Array.from({ length: numFeaturePages }).forEach((_, i) => {
              createPage({
                  path: i === 0 ? `/featurelisting` : `/featurelisting/${i + 1}`,
                  component: path.resolve("./src/components/FeatureList.js"),
                  context: {     
                      limit: postsPerPage,      
                      skip: i * postsPerPage,
                      numPages,      
                      currentPage: i + 1,   
                    }  
                  });
              });

              features.forEach(({node}) => {
                createPage({
                    path: `/posts${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/featureLayout.js'),
                    context: {
                        slug:node.frontmatter.slug,
                    }
                });
            })


              Array.from({ length: numPages }).forEach((_, i) => {
              createPage({
                  path: i === 0 ? `/gallerylisting` : `/gallerylisting/${i + 1}`,
                  component: path.resolve("./src/components/gallery-listing.js"),
                  context: {     
                      limit: postsPerPage,      
                      skip: i * postsPerPage,
                      numPages,      
                      currentPage: i + 1,   
                    }  
                  });
              });
            
              posts.forEach((post, index, arr) => {
                categories.push(post.node.frontmatter.subject)

                const prev = arr[index - 1]
                const next = arr[index + 1]
          
                createPage({
                  path: `/gallery${post.node.frontmatter.slug}`,
                  component: path.resolve('./src/components/postLayout.js'),
                  context: {
                    slug: post.node.frontmatter.slug,
                    prev: prev,
                    next: next,
                  },
                })
              })

              ///Create Category Pages

              const countCategories = categories.reduce((prev, curr) => {
                prev[curr] = (prev[curr] || 0) + 1
                return prev
              }, {})
              const allCategories = Object.keys(countCategories)
          
              allCategories.forEach((cat, i) => {
                const link = `/gallery/category/${kebabCase(cat)}`
          
                Array.from({
                  length: Math.ceil(countCategories[cat] / postsPerPage),
                }).forEach((_, i) => {
                  createPage({
                    path: i === 0 ? link : `${link}/${i + 1}`,
                    component: path.resolve("./src/components/category-listing.js"),
                    context: {
                      allCategories: allCategories,
                      category: cat,
                      limit: postsPerPage,
                      skip: i * postsPerPage,
                      currentPage: i + 1,
                      numPages: Math.ceil(countCategories[cat] / postsPerPage),
                    },
                  })
                })
              })
          

            resolve( );
        })
    });  
};