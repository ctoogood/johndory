import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const FeaturedContainer = styled.div `
  border-bottom: 0.5rem solid #d2a193;
  position:relative;

  @media only screen and (min-width:800px) {
    display:grid;
    grid-template-columns:3fr 2fr;
  }

  .image-container {
    padding:0;
    display:block;
    max-height:80vh;


    Img {
      padding:0;
      display:block;
      max-height:80vh;
    }
  }

  .text-container {
    position:relative;
    text-align:center;
    background-color:#F8F8F8;
    width:100%;

    @media only screen and (min-width:800px) {
      text-align:left;
    }

    h2, h3, h4 {
      font-family:playfair display;
    }

    h3 {
      color:#6B8090;
      margin-bottom:0.5rem;
      @media only screen and (min-width:900px) {
        font-size:2rem;
      }
    }

    h2 {
      margin-top:0.5rem;
      color:#565555;
      font-weight:bold;

      @media only screen and (min-width:900px) {
        font-size:2.2rem;
      }
    }

    h4 {
      color:#565555;
      display:none;
      @media only screen and (min-width:1100px) {
        display:block;
      }
    }

    button {
      border: 1px solid #d2a193;
      padding: .1rem 1rem;
      margin-top: 1rem;
      color:#d2a193;
      text-decoration: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-family:montserrat;
      margin-bottom:1rem;
    }
    
    hr {
      display: block;
      height: 0px;
      border: 0;
      border-top: 1px solid #d2a193;
      background-color: #d2a193;
      margin: auto;
      padding: 0;
      width:50%;

      @media only screen and (min-width:800px) {
        margin:0;
      }
    }
    
    span {
      margin:1rem;
      @media only screen and (min-width:800px) {
        position:absolute;
        top:50%;
        left:0;
        transform:translate(0, -50%);
      }
    }
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`


const Feature = ( ) => (
  <StaticQuery
    query={graphql`
    query FeaturedImage {
        allMarkdownRemark(limit:1
        sort: {fields:frontmatter___date, order:DESC}
        filter: {fileAbsolutePath: {regex: "\/posts/"}}) {
          edges {
            node {
              frontmatter {
                title
                description
                slug
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth:1400) {
                      ...GatsbyImageSharpFluid
                    } 
                  }
                }
              }
            }
          }
        }
      }
        `}

    render={({allMarkdownRemark}) => (
      <>
        <section>
           {allMarkdownRemark.edges.map(edge => (
              <FeaturedContainer>
                <div className="image-container">
                  <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                <div className="text-container">
                  <span>
                  <h3>Featured Story</h3> 
                  <hr />
                  <Link classname="link" to={`/posts${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  </Link>
                  <h4>{edge.node.frontmatter.description}</h4>
                  <button><Link classname="link" to={`/posts${edge.node.frontmatter.slug}`}>View Post</Link></button>
                  </span>
                </div>
              </FeaturedContainer>
           ))}
        </section>
      </>
    )}
  />
)

export default Feature
