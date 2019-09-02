import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import Footer from './footer'

const Main = styled.main `
  margin:auto;
`

const Content = styled.section `
  margin:auto;
  margin-bottom:0;
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
