import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Featured = styled.div `
position:relative;
overflow:hidden;
transition:all .2s ease-in-out;
font-family: Playfair Display;
margin:1rem;
margin-bottom:8rem;
text-align:center;

@media only screen and (min-width:720px) {
  margin:0;
}

a {
    color:#115974;
    text-decoration:none;
}
h2 {
    margin-bottom:.2rem;;
    margin-top:1rem;
    font-weight:bold;
    color:#507f90;
}
h3 {
  margin-bottom:5px;
  color:#7c7c7c;
  font-size:.9rem;
}
h4 {
    color:#507f90;
    font-weight:normal;
    margin-bottom:10px;
    font-family:montserrat;
    padding-top:.5rem;
}
p {
    font-size:0.8rem;
}
.read-more {
    text-decoration:underline;
    font-size:0.8rem;
    color:#c96649;
}

.post-image {
  min-height:250px;
  position:relative;
  transition:all 2s linear;
  filter:opacity(80%);
}

.image-container {
  background-color:#6e929e;
  transition:all 0.3s linear;
}

.title-container {
  background-color:white;
  width:75%;
  border-radius:7px 7px 0px 0px;
  

  @media only screen and (min-width:1100px) {
    width:75%;
  }
}

&:hover {

  .image-container {
    background-color:white;
  }

  }
}
`
const FeaturedListContainer = styled.section `
        position:relative;
        padding-top:2rem;
        badding-bottom:2rem;
        text-align:center;
        border-top:0.5rem solid #6e929e;

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
          transition:all 0.3s ease-in-out;

      &:hover {
        color:white;
        border:1px solid white;
        background-color: #d2a193
      }
        }
`

const FeaturedList = styled.div`
        position:relative;
        margin:auto;
        margin:0.5rem;
        text-align:left;
        @media only screen and (min-width:720px) {
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:1rem;
            margin:2rem;

        }
        @media only screen and (min-width:1100px) {
          grid-template-columns:1fr 1fr 1fr;
      }

      hr {
        display: block;
        height: 0px;
        border: 0;
        border-top: 1px solid #d2a193;
        background-color: #d2a193;
        padding: 0;
        width:80%;
        margin-top:.5rem;
        margin-bottom:.5rem;
        margin:auto;
  
        
      }
`


const FoodFocusList = ( ) => (
  <StaticQuery
    query={graphql`
    query FoodFocusList {
        allMarkdownRemark(limit:3
        sort: {fields:frontmatter___date, order:DESC}
        filter: {fileAbsolutePath: {regex: "\/features/"}}
        skip:1) {
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
      <FeaturedListContainer>
        <FeaturedList>
           {allMarkdownRemark.edges.map(edge => (
              <Featured>
                <Link classname="link" to={`/features${edge.node.frontmatter.slug}`}>
                <div className="image-container">
                  <Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                </Link>
                <div className="text-container">
                  <span>
                  <Link classname="link" to={`/features${edge.node.frontmatter.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  </Link>
                  <hr />
                  <h4>{edge.node.excerpt}</h4>
                  </span>
                </div>
              </Featured>
           ))}
        </FeaturedList>
        <Link to="/features"><button>View All</button></Link>
        </FeaturedListContainer>
      </>
    )}
  />
)

export default FoodFocusList
