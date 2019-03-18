module.exports = {
  siteMetadata: {
    title: `The John Dory`,
    subtitle: `Culinary Tales`,
    description: `Stories about great local food and drink - Photography, Videos, Food Journalism`,
    author: `Calum Toogood`,
    siteUrl: 'https://wonderful-booth-7f5bf9.netlify.com/'
  },
  
  plugins: [


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name:'uploads',
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name:'images',
      },
    },
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name:'posts'
      },
    },
    
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          
          {
            resolve: `gatsby-remark-images-grid`,
            options: {
                className: 'myCustomClassName',
                gridGap: '20px',
                margin: '20px auto'
            },
        },
        
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    `gatsby-plugin-netlify-cms`,

  ],
}
