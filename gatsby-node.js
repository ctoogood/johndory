const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const kebabCase = require(`lodash.kebabcase`)

exports.createPages = ( { graphql, actions} ) => {
    const { createPage } = actions;

    return new Promise( ( resolve, reject ) => {
        graphql(`
        {
            posts: allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: {
                  frontmatter: {category: {eq: "post"}}
                }
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
            gallery: allMarkdownRemark(sort:{
              order: ASC,
              fields:[frontmatter___slug]
              
            }
            filter: {
              frontmatter: {category: {eq: "gallery"}}
            }) {
                        edges {
                          node {
                            frontmatter {
                              date(formatString: "MMMM DD, YYYY")
                              caption
                              category
                              slug
                              tags
                              subject
                            }
                          }
                        }
                      }
          }
        `).then(results => {

            const posts = results.data.gallery.edges
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
                post.node.frontmatter.tags.forEach(tag => tags.push(tag))

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

              ///Create Tags Pages

              const countTags = tags.reduce((prev, curr) => {
                prev[curr] = (prev[curr] || 0) + 1
                return prev
              }, {})
              const allTags = Object.keys(countTags)
          
              allTags.forEach((tag, i) => {
                const link = `/gallery/tags/${kebabCase(tag)}`
          
                Array.from({
                  length: Math.ceil(countTags[tag] / postsPerPage),
                }).forEach((_, i) => {
                  createPage({
                    path: i === 0 ? link : `${link}/${i + 1}`,
                    component: path.resolve("./src/components/tags-listing.js"),
                    context: {
                      allTags: allTags,
                      tag: tag,
                      limit: postsPerPage,
                      skip: i * postsPerPage,
                      currentPage: i + 1,
                      numPages: Math.ceil(countTags[tag] / postsPerPage),
                    },
                  })
                })
              })
          

            resolve( );
        })
    });  
};