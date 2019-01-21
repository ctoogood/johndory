import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
        file(relativePath: {
          regex: "/IMG_0315/"
        }) {
          childImageSharp {
            fluid(maxWidth:1000) {
              ...GatsbyImageSharpFluid
            }
            
          }
        }
      }
    `}

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} siteSubtitle={data.site.siteMetadata.subtitle} />
        <Img fluid={data.file.childImageSharp.fluid } style={{
          maxHeight:`75vh`,
          objectFit:`cover`
        }}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1rem`,
            paddingTop: 0,
          }}
        >
          {children}
          
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
