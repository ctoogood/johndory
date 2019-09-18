import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import SimpleSlider from '../components/slider1'
import PostIndex from '../components/postList'




const AboutText = styled.section `
    border-top:0.5rem solid #6e929e;
    text-align:center;
    padding:2rem;

    h2 {
      font:3rem playfair display;
      font-weight:bold;
      margin-top:2rem;
      color:#5A5A5A;
      @media only screen and (min-width:480px) {
        font-size:4rem;
        margin-top:8rem;
      }
    }

    h4 {
      font:1.5rem playfair display;
      margin-top:2rem;
      width:60%;
      margin:auto;
      margin-bottom:10rem;
      color:#7C7C7C;
      @media only screen and (min-width:480px) {
        font-size:2rem;
      }
    }
`


class Index extends React.Component {

  
  render( ) {

    return (
      <Layout>
        <Helmet>
          <meta name="p:domain_verify" content="292f8a827f24bff0a8377677d0604f66"/>
        </Helmet>
        <SEO title="Home" keywords={[`blog`, `food`, `drink`, `documentary`, `photography`, `travel`, `food & drink`, `produce`]}/>
        <SimpleSlider />
        <AboutText>
          <h2><em>Food Culture Through The Lens</em></h2>
          <h4><em>Providing an insight into the processes behind the dishes & the people that make it happen.</em></h4>
        </AboutText>
        <PostIndex />
        
        
        
  </Layout>

    )}}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
      skip: 0
      filter: {fileAbsolutePath: {regex: "\/posts/"}}
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            location
            description
            slug
            featuredImage
          }
        }
      }
    }
  }
`

