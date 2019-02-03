import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'



const BlogPostHeaderImage = styled.section`
    position:relative;
    background-color:#464646;
    height:40vh;
    border-bottom:.5rem solid #d2a193;
    
        @media only screen and (min-width:720px) {
            height:60vh;
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
            @media only screen and (min-width:720px) {
                font-size:5rem;
             }
        }

        h4 {
            opacity:0.7;
            color:white;
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

export default class postLayout extends Component {
  render() {
      const { markdownRemark } = this.props.data;
      console.log(this.props.pageContext)
    return (
      <Layout>
            <BlogPostHeaderImage>
            <Img style={{ objectPosition:`center`, height:'100%' }} sizes={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
                
                <BlogPostTitle>
                    <h1>{ markdownRemark.frontmatter.title }</h1>
                    <h4>{ markdownRemark.frontmatter.date}</h4>
                </BlogPostTitle>
            </BlogPostHeaderImage>
        <BlogPostHeader />
        <BlogPostContent dangerouslySetInnerHTML = { {
            __html: markdownRemark.html
         } } />
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