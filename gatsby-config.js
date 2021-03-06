module.exports = {
  siteMetadata: {
    title: `The John Dory`,
    subtitle: `Culinary Tales`,
    description: `Stories about great local food and drink - Photography & Food Journalism`,
    author: `Calum Toogood`,
    siteUrl: 'https://www.johndory.uk',
    image: "https://res.cloudinary.com/dhat0b0ey/image/upload/v1544373582/johndory/General/IMG_0315.jpg",
    twitterUsername:"@thejohndoryuk",
    keywords: "food, drink, blog, produce, culinary"
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "The John Dory",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143662307-1",
      },
    },



    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/images`,
        name:`images`,
      },
    },
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts`,
        name:'posts'
      },
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: '<form action="https://gmail.us3.list-manage.com/subscribe/post?u=c56f20fb1d3467f23805562a0&amp;id=ef1881d279" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>', // add your MC list endpoint here; see instructions below
      },
    },
    
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-grid",
            options: {
                className: "markdown-grid",
                gridGap: "20px",
                margin: "20px auto",
            },
        },

        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 1000,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
          }
        },
        
        `gatsby-remark-responsive-iframe`,
   
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
        },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },

    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

  ],
}
