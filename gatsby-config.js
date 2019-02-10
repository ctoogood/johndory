var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: `The John Dory`,
    subtitle: `Culinary Tales`,
    description: `Stories about food production`,
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

    {
      resolve:`gatsby-source-cloudinary`,
      options:{
        cloudName: 'dhat0b0ey',
        apiKey: '328191115239953',
        apiSecret: 'NCYcw2XGxf3Ivvr1eX7sXmGd0gM'
      },
    },
    

    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    netlifyCmsPaths,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          
          {
            resolve: "gatsby-remark-images-grid",
            options: {
                className: "myCustomClassName",
                gridGap: "20px",
                margin: "20px auto",
            },
        },

        {
          resolve: '@dylanvann/gatsby-transformer-cloudinary',
          options: {
              cloudName: 'dhat0b0ey',
              apiKey: '328191115239953',
              apiSecret: 'NCYcw2XGxf3Ivvr1eX7sXmGd0gM'
          },
      },

        `gatsby-remark-relative-images`,

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },

          netlifyCmsPaths,
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
