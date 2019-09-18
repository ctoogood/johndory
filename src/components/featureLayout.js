import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from './seo'
import { DiscussionEmbed } from 'disqus-react'



import twitterIcon from '../content/images/twitter.svg'
import fbIcon from '../content/images/facebook.svg'


const BlogPostMain = styled.main `
.image-container {
  padding:0;
  display:block;
  max-height:80vh;
  max-width:900px;
  margin:auto;
  margin-top:3rem;
  


  img {
    padding:0;
    display:block;
    max-height:80vh;
  }
}
`

const BlogPostContent = styled.article`
    padding:1rem;
    color:#333 ;
    max-width:900px;
    margin:auto;
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
        font:1.5rem Playfair Display;
        font-style:italic;
        max-width:700px;
        margin:auto;
        padding-bottom:2rem;
        line-height:1.4;
    }

    h3 {
      margin-top:2rem;
    }


    p {
        max-width:700px;
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
  position:relative;
  border-bottom: 0.2rem solid #d2a193;
  border-top: 0.2rem solid #6e929e;
  margin:2rem;
  max-width:700px;
  margin-top:3rem;
  margin:2rem;

  @media only screen and (min-width:900px) {
    margin:auto;
    margin-top:3rem;

  }

  .text-container {
    position:relative;
    text-align:center;
    padding-top:.5rem;
    padding-bottom:.5rem;
    

    


    h2, h3, h4, h5 {
      font-family:playfair display;
    }



    h5 {
      color:#d2a193;
      margin-bottom:0.5rem;
     
    }

    h2 {
      margin-top:0.5rem;
      margin-bottom:0.5rem;
      color:#565555;
      font-weight:bold;
      font-size:3rem;
 
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
        font-size:1.8rem;
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
      background-color: #d2a193;
      margin: auto;
      padding: 0;
      width:50%;

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
const Comments = styled.section `
    padding:1rem;
`


export default class postLayout extends Component {
  render() {
      const { markdownRemark } = this.props.data;
      const post = this.props.data.markdownRemark
      const ogImagePath = post.frontmatter.featuredImage
      const title = post.frontmatter.title;
      const slug = post.frontmatter.slug;

      const disqusShortname = 'the-john-dory';
      const disqusConfig = { 
        shortname: 'the-john-dory',
        config: { identifier: slug, title: title },
       }

    return (
      <Layout>
            <SEO
             title={markdownRemark.frontmatter.title} 
             image={ogImagePath}
             description={post.frontmatter.description}/>
            <BlogPostMain>
            <FeaturedContainer>
                <div className="text-container">
                  <span>
                  <h5><em>{markdownRemark.frontmatter.date}</em></h5>
                  <h2><em>{markdownRemark.frontmatter.title}</em></h2>
                  <h3><em>{markdownRemark.frontmatter.location}</em></h3>
                  </span>
                </div>
              </FeaturedContainer>


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
        <Comments id="comments">
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Comments>
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
            date(formatString: "MMMM DD, YYYY" )
            slug
            location
            featuredImage {
              childImageSharp {
                fluid(maxWidth:1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
              
        }
        }
    }
    `;