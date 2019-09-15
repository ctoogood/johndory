import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"
import Layout from "./layout";

const PostGrid = styled.section `
position:relative;
text-align:center;
@media only screen and (min-width:720px) {
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:1rem;
    margin:2rem;
    text-align:left;

}
@media only screen and (min-width:1100px) {
  grid-template-columns:1fr 1fr 1fr;
}
`

const PostList = styled.main `
  margin-left:0;
  width:100%;
  

  .post-image {
    position:relative;

  }

  .image-container {
    overflow:hidden;
    border-radius:3px;
  }

`
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
          margin:auto;
          

          @media only screen and (min-width:720px) {
            margin:0;
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

const FeatureListing = () => (
  <Layout>
  <StaticQuery
    query={FEATURE_LISTING_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        
        <PostList>
        <PostGrid>
        {allMarkdownRemark.edges.map(edges => (
          
          <Post key={edges.node.frontmatter.slug}>
          <Link to={`/posts${edges.node.frontmatter.slug}`}>

          <div className="image-container">
              <Img className="post-image" fluid={edges.node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          
          <div className="title-container">
            <h2>{edges.node.frontmatter.title}</h2>
            <hr />
            <h3>{edges.node.excerpt}</h3>
          </div>
          </Link>
      </Post>
      
        ))}
        </PostGrid>
        </PostList>
      </>
    )}
  />
  </Layout>
)


export default FeatureListing

const FEATURE_LISTING_QUERY = graphql`
query FeatureListingQuery {
	allMarkdownRemark(sort:{
    order: DESC,
    fields:[frontmatter___date]
    
  }
  filter: {
    fileAbsolutePath: {regex: "/posts/"}
  }) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY" )
          slug
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth:800) {
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