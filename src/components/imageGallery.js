import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const PostGrid = styled.section `
position:relative;
text-align:center;
@media only screen and (min-width:720px) {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:1rem;
    text-align:left;
    max-width:1200px;
    margin:auto;
    padding:2rem;

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
        margin-bottom:4rem;


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

          &:hover {
            transform:scale(1.1);

          }
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

const Button = styled.button `
  position:relative;
  right:-50%;
  transform:translateX(-50%);
  border: 1px solid #d2a193;
  padding: .1rem 1rem;
  margin-top: 2rem;
  color:#d2a193;
  text-decoration: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
  font: 1.2rem montserrat;
  margin-bottom:4rem;
  transition:all 0.3s ease-in-out;

    &:hover {
    color:white;
    border:1px solid white;
    background-color: #d2a193;
    }

`

const ImageGallery = () => (
  <StaticQuery
    query={IMAGE_GALLERY_QUERY}
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

          </Link>
      </Post>
      
        ))}
        </PostGrid>
        </PostList>
        <Link to="/gallerylisting"><Button>View All</Button></Link>
      </>
    )}
  />
)


export default ImageGallery

const IMAGE_GALLERY_QUERY = graphql`
query ImageGalleryQuery {
	allMarkdownRemark(sort:{
    order: DESC,
    fields:[frontmatter___date]
    
  }
  limit: 15
  filter: {
    frontmatter: {category: {eq: "gallery"}}
  }) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY" )
          slug
          location
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth:600) {
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