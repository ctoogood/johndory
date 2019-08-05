import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import SEO from './seo'


const BlogPostMain = styled.main `
    
    .blog-content {
        h2 {
        }
    }
`

const BlogPostHeaderImage = styled.section`
    position:relative;
    background-color:white;
    min-height:250px;
    border-bottom:.5rem solid #d2a193;
    background-color:#F8F8F8;


    @media only screen and (min-width:720px) {
        height:50vh;
    }

    
        @media only screen and (min-width:1200px) {
            height:80vh;
            width:100%;
            }

    .image-container {
        position:relative;
        right:0;
        height:100%;
        width:100%;
        filter:opacity(1);

        @media only screen and (min-width:720px) {
            width:100%;
            filter:opacity(1);
        }
    }

    Img {
        filter:opacity(1);
        height:100%;
        object-fit:cover;
    }
`

const BlogPostTitle = styled.div`
    position:relative;
    text-align:center;
    width:100%;
    max-height:18rem;
    background-color:rgba(255,255,255,0.8);

    @media only screen and (min-width:720px) {
        position:absolute;
        text-align:left;
        top:50%;
        left:0%;
        padding:2rem;
        transform:translate(-0%,-50%);
        background-color:rgba(255,255,255,0.9);
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);        
        border-radius:0px 8px 8px 0px;
        width:auto;
        
       
    }


        h1 {
            color:#6e929e;
            margin:0;
            @media only screen and (min-width:1200px) {
                font-size:4rem;
             }
        }

        h2 {
            color:#d2a193;
            opacity:0.9;
            font-size:.8rem;
            font-family:montserrat;
            padding:0.5rem;
            position:relative;
            right:0;
            @media only screen and (min-width:720px) {
                text-align:right;
             }
            @media only screen and (min-width:1200px) {
                font-size:1.5rem;
             }
        }

        h4 {
            opacity:0.8;
            color:#d2a193;
            font-family:montserrat;
            padding:1rem;
            padding-left:0;
            margin:0;

            
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
    text-align:left;
    

        @media only screen and (min-width:720px) {
            padding:2rem;
            }



    h2 {
        color:#6e929e;
        font-size:2rem;
        max-width:900px;
        margin:auto;
        padding-bottom:3rem;
        line-height:1.2;
    }

    p {
        max-width:900px;
        margin:auto;
        padding-bottom:1rem;
        line-height:1.5;
        font-size:1.2rem;
    }

    blockquote {
        color:#6e929e;
        font:2rem playfair display;
        font-weight:bold;
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
            <BlogPostHeaderImage>
                <div className="image-container">
                <Img style={{ objectPosition:`center`, height:`100%`}} fluid={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />

                </div>
                <BlogPostTitle>
                    <h4>{ markdownRemark.frontmatter.date}</h4>
                    <h1>{ markdownRemark.frontmatter.title }</h1>
                    <h2>{ markdownRemark.frontmatter.location}</h2>
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