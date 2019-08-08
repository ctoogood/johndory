import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from './seo'


const BlogPostMain = styled.main `
    .blog-content {
        h2 {
            text-align:center;
        }
    }
`

const BlogPostHeaderImage = styled.section`
    position:relative;
    background-color:#464646;
    height:50vh;
    min-height:250px;
    border-bottom:.5rem solid #d2a193;
    
        @media only screen and (min-width:720px) {
            height:65vh;
            }

    Img {
        filter:opacity(.7);
        height:100%;
        width:100%;
        object-fit:cover;
    }
`

const BlogPostTitle = styled.div`
    position:absolute;
    text-align:center;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

        h1 {
            color:white;
            margin:0;
            @media only screen and (min-width:720px) {
                font-size:5rem;
             }
        }

        h2 {
            color:white;
            opacity:0.9;
            font-size:.8rem;
            font-family:montserrat;
            @media only screen and (min-width:720px) {
                font-size:1.5rem;
             }
        }

        h4 {
            opacity:0.8;
            color:white;
            font-family:montserrat;
            padding:0;
            margin:0;
        }
`

const BlogPostHeader = styled.section`
    border-bottom:.5rem solid #6e929e;
    height:2rem;
`

const BlogPostContent = styled.article`
    padding:1rem;
    color:#31343d;
    max-width:1200px;
    margin:auto;
        @media only screen and (min-width:720px) {
            padding:2rem;
            }
    
    
`

export default class FoodFocusLayout extends Component {
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
            <BlogPostHeaderImage>
            <Img style={{ objectPosition:`center`, height:'100%' }} fluid={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
                
                <BlogPostTitle>
                    <h1>{ markdownRemark.frontmatter.title }</h1>
                </BlogPostTitle>
            </BlogPostHeaderImage>
        <BlogPostHeader />
        <BlogPostContent className="blog-content" dangerouslySetInnerHTML = { {
            __html: markdownRemark.html
         } } />
         </BlogPostMain>
      </Layout>
    )
  }
}

export const query = graphql `
    query FeatureQuery ( $slug: String! ) {
        markdownRemark(frontmatter: {
        slug: {
            eq: $slug
        }
        }) {
        html
        frontmatter {
            title
            location
            date(formatString: "MMMM DD, YYYY" )
            slug
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