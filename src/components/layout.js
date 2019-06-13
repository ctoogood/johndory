import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './footer'

const Main = styled.main `
  
`


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
      }
    `}

    render={data => (
      <>
        <Main>
        <Header siteTitle={data.site.siteMetadata.title} siteSubtitle={data.site.siteMetadata.subtitle} />
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
            maxWidth:'1400px',
            boxShadow:'0px 5px 7px rgba(0,0,0,0.2)'
          }}
        >
          {children}
          
          
    
          <Footer />
        </div>
        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
