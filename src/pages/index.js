import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'
import Feature from '../components/featuredArticle'
import Img from 'gatsby-image'
import HeaderImage from '../components/headerImage'
import Email from '../components/email'



const Post = styled.article`
        position:relative;
        overflow:hidden;
        transition:all .2s ease-in-out;
        font-family: Playfair Display;
        margin:1rem;
        margin-bottom:8rem;

        @media only screen and (min-width:720px) {
          margin:0;
        }
        
        a {
            color:#115974;
            text-decoration:none;
        }
        h2 {
            margin-bottom:0;
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
        }

        h5 {
          margin-left:0.1rem;
          font-family:playfair display;
          margin-bottom:0;
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
          width:100%;
          border-radius:7px 7px 0px 0px;
          text-align:center;
          margin:auto;

          @media only screen and (min-width:720px) {
            width:75%;
          }

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

const PostsListContainer = styled.section `
        position:relative;
        padding-top:3rem;
        margin-top:1rem;
        margin-bottom:3rem;
        text-align:center;
        border-top:0.5rem solid #6e929e;

        button {
          border: 1px solid #d2a193;
          padding: .1rem 1rem;
          margin-top: 0;
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

const PostsList = styled.div`
        position:relative;
        margin:auto;
        margin:0.5rem;
        max-width:1200px;
      
        @media only screen and (min-width:720px) {
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:3rem;
            margin:auto;
            padding:2rem;

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
        margin:auto;
        margin-top:.5rem;
        margin-bottom:.5rem;
  
        
      }
`


class Index extends React.Component {

  
  render( ) {

    const posts = this.props.data.allMarkdownRemark.edges


    return (
      <Layout>
        <Helmet>
          <meta name="p:domain_verify" content="292f8a827f24bff0a8377677d0604f66"/>
        </Helmet>
        <SEO title="The John Dory" keywords={[`blog`, `food`, `drink`, `documentary`, `shetland`, `scotland`, `food & drink`, `produce`]}/>
        <HeaderImage />
        <Feature />
        <PostsListContainer>
          <PostsList>
        {posts.map(({ node }) => {
          return (
          <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>

          <div className="image-container">
              <Img className="post-image" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          
          <div className="title-container">
            <h2>{node.frontmatter.title}</h2>
            <h5><em>{node.frontmatter.location}</em></h5>
            <hr />
            <h3>{node.frontmatter.description}</h3>
          </div>
          </Link>
      </Post>
          )
        })}
        </PostsList>
        <Link to="/posts"><button>View All</button></Link>
        </PostsListContainer>
        <Email />
        
        
        
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

