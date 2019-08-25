import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from './seo'

import twitterIcon from '../content/images/twitter.svg'
import fbIcon from '../content/images/facebook.svg'
import Email from './email';


const BlogPostMain = styled.main `
    
    .blog-content {
        h2 {
        }
    }
`

const BlogPostHeader = styled.section`
    border-bottom:.5rem solid #6e929e;
    height:2rem;
`

const BlogPostContent = styled.article`
    padding:1rem;
    color:#333 ;
    max-width:1200px;
    margin:auto;
    text-align:center;
    font-size:1.2rem;

    blockquote {
      color:#6e929e;
      font:1.5rem playfair display;
      font-weight:bold;
  }
    

        @media only screen and (min-width:720px) {
            padding:2rem;
            }

            


    h2, h3 {
        color:#115974;
        font:2rem Playfair Display;
        font-weight:700;
        font-style:italic;
        max-width:900px;
        margin:auto;
        padding:2rem;
        line-height:1.4;
    }


    p {
        max-width:900px;
        margin:auto;
        padding-bottom:1rem;
        line-height:1.5;

        
    }

    
`

const ShareIcons = styled.section `
    width:100%;
    padding-bottom:2rem;
    
    h3 {
        text-align:center;
        font-family:playfair display;
        font-weight:400;
        font-size:2rem;
    }

    ul {
        margin:auto;
        text-align:center;


    }
    li {
        display:inline;
    }
    img {
        max-width:50px;
        margin-left:2rem;
        margin-right:2rem;
        margin-bottom:2rem;
    }
`

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

    h2, h3, h4, h5 {
      font-family:playfair display;
    }



    h5 {
      color:#d2a193;
      margin-bottom:0.5rem;
     
    }

    h2 {
      margin-top:0.5rem;
      margin-bottom:0;
      color:#565555;
      font-weight:bold;

      @media only screen and (min-width:480px) {
        font-size:3rem;
      }
    }

    h4 {
      color:#565555;
      display:none;
      @media only screen and (min-width:1100px) {
        display:block;
      }
    }

    h3 {
      margin-left:0.1rem;
      color:#6B8090;
      @media only screen and (min-width:480px) {
        font-size:2rem;
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
      transition:all 0.3s ease-in-out;

      &:hover {
        color:white;
        border:1px solid white;
        background-color: #d2a193
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

export default class postLayout extends Component {
  render() {
      const { markdownRemark } = this.props.data;
      const post = this.props.data.markdownRemark
      const ogImagePath = post.frontmatter.featuredImage.childImageSharp.fluid.src


    return (
      <Layout>
            <SEO
             title={markdownRemark.frontmatter.title} 
             image={ogImagePath}
             description={post.frontmatter.description}/>
            <BlogPostMain>
            <FeaturedContainer>
                <div className="image-container">
                  <Img fluid={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
                <div className="text-container">
                  <span>
                  <h5><em>{markdownRemark.frontmatter.date}</em></h5>
                  <h2>{markdownRemark.frontmatter.title}</h2>
                  <h3><em>{markdownRemark.frontmatter.location}</em></h3>
                  <hr />
                  </span>
                </div>
              </FeaturedContainer>
        <BlogPostHeader />
        <BlogPostContent className="blog-content" dangerouslySetInnerHTML = { {
            __html: markdownRemark.html
         } } />
         <ShareIcons>
            <h3>Share</h3>
            <ul>
                <li>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.johndory.uk/posts${post.frontmatter.slug}`} target="_blank" rel="noopener noreferrer">
                        <img src={fbIcon} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.johndory.uk/posts${post.frontmatter.slug}`} target="blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </li>
            </ul>
        </ShareIcons>
        <Email />
         </BlogPostMain>
      </Layout>
    )
  }
}

export const query = graphql `
    query PostQuery ( $slug: String! ) {
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
        }
        }) {
        html
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY" )
            slug
            location
            description
            featuredImage {
                childImageSharp {
                  fluid(maxWidth:1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
        }
    }
    `;