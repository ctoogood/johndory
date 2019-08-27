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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143662307-1",
      },
    },

    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        // Set to true to display a bigger button
        tall: false, // default
        // Set to true to hide the text and display only a round P button
        round: true // default
      }
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/features`,
        name:'features'
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

  ],
}
