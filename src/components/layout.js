import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './footer'

const Main = styled.main `
  
`

const Content = styled.section `
  max-width:1200px;
  margin:auto;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
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
        <Content
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          {children}
          
          
    
        </Content>
        <Footer />

        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
