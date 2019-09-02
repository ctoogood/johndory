import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import SimpleSlider from '../components/slider1'
import ImageGallery from '../components/imageGallery'




const AboutText = styled.section `
    border-top:0.5rem solid #6e929e;
    margin-top:1rem;
    text-align:center;
    padding:2rem;

    h2 {
      font:3rem playfair display;
      font-weight:bold;
      margin-top:10rem;
      color:#5A5A5A;
      @media only screen and (min-width:480px) {
        font-size:4rem;
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

const SubjectList = styled.section `
    text-align:center;
    max-width:1200px;
    margin:auto;

    h2 {
      font:playfair display;
      font-weight:bold;
      color:#5A5A5A;
     
    }

    h2 {
      overflow: hidden;
      text-align: center;
      margin:1rem;
      padding-bottom:1rem;
  }
  h2:before,
  h2:after {
      background-color: #000;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
  }
  h2:before {
      right: 0.5em;
      margin-left: -50%;
  }
  h2:after {
      left: 0.5em;
      margin-right: -50%;
  }

  .listingList {
    padding:1rem;
    text-decoration:none;
    color:inherit;
  }

  button {
    border: none;
    border-radius:15px;
    padding: .1rem 1rem;
    margin: 1rem;
    color:white;
    text-decoration: none;
    background: #E8C593;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
    font-family:montserrat;

    &:nth-child(2) {
      background:#d2a193;
    }

    &:nth-child(3) {
      background:#B8B0BF;
    }

    &:nth-child(4) {
      background:#BDC7C6
    }
  }

  button:hover,
  button:focus {
    background: none;
    color:#d2a193;
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
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
        <SubjectList>
          <h2>Food Photography</h2>
          <section className="categoryButtons">
          <button>
            <Link className="listingList" to="gallery/category/in-the-field"><em>In The Field</em></Link>
          </button>
          <button>
            <Link className="listingList" to="gallery/category/in-action"><em>In Action</em></Link>
          </button>
          <button>
            <Link className="listingList" to="gallery/category/for-sale"><em>On Display</em></Link>
          </button>
          <button>
            <Link className="listingList" to="gallery/category/on-the-table"><em>On The Table</em></Link>
          </button>
          </section>
        </SubjectList>
        <ImageGallery />
        
        
        
        
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth:400) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
          }
        }
      }
    }
  }
`

