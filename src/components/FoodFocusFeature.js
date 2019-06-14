import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const FeaturedContainer = styled.div `
  position:relative;

  .image-container {
    padding:0;
    max-height:70vh;
    position:relative;
    background-color:black;


    Img {
      padding:0;
      max-height:70vh;
      filter: opacity(0.8);
    }
  }

  .text-container {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    text-align:center;

    h2, h3, h4 {
      font-family:playfair display;
      color:white;
    }

    h3 {
      margin-bottom:0.5rem;
    }

    h2 {
      margin-top:0.5rem;
      font-size:3rem;
      font-weight:bold;
    }

    h4 {
      display:none;
      @media only screen and (min-width:1100px) {
        display:block;
      }
    }

    button {
      border: 1px solid white;
      padding: .1rem 1rem;
      margin-top: 1rem;
      color:white;
      text-decoration: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-family:montserrat;
      margin-bottom:1rem;
      transition:all 0.5s ease-in-out;

      &:hover {
        color:black;
        border:1px solid black;
        background-color: white
      }
    }
    
    hr {
      display: block;
      height: 0px;
      border: 0;
      border-top: 1px solid #d2a193;
      background-color: #d2a193;
      margin: auto;
      padding: 0;
      width:100%;

      @media only screen and (min-width:800px) {
        margin:0;
      }
    }
    
    span {
      margin:1rem;
      
    }
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`


const FoodFocusFeature = ( ) => (
  <StaticQuery
    query={graphql`
    query FoodFeatureIndex {
        allMarkdownRemark(limit:1
        sort: {fields:frontmatter___date, order:DESC}
        filter: {fileAbsolutePath: {regex: "\/features/"}}) {
          edges {
            node {
              excerpt
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
                  <div className="text-container">
                  <span>
                  <h3>Food Focus</h3> 
                  <hr />
                  <Link classname="link" to={`/posts${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  </Link>
                  <h4>{edge.node.excerpt}</h4>
                  <button><Link classname="link" to={`/features${edge.node.frontmatter.slug}`}>View</Link></button>
                  </span>
                </div>
                </div>
                
              </FeaturedContainer>
           ))}
        </section>
      </>
    )}
  />
)

export default FoodFocusFeature
