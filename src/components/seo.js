import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, image, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const seoImage = `${data.site.siteMetadata.siteUrl}${image || data.file.childImageSharp.fluid.src}`;
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property:`og:url`,
                content:"https://www.johndory.uk",
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property:`og:image`,
                content:seoImage,
              },
              {
                property:`og:image:width`,
                content:"1200"
              },
              {
                property:`og:image:height`,
                content:"630"
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: seoImage,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ["food", "drink", "blog", "produce", "culinary"],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
query DefaultSEOQuery {
  site {
    siteMetadata {
      title
      description
      author
      image
      siteUrl
    }
  }
  file(relativePath: { eq: "IMG_0315.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2400) {
        src
      }
    }
  }
}
`