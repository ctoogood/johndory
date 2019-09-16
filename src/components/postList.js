import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const ArchiveList = styled.main `
  margin-bottom:5rem;

  p {
    color:#6E929E;
    padding-top:1rem;
    padding-left:1rem;
    margin-bottom:0;
    height:100%;

    @media only screen and (min-width:720px) {
      writing-mode: vertical-rl;
      text-orientation:sideways;
      position:absolute;
    }
    
    
  }


  .featured-grid {
    list-style-type:none;
    width:100%;
    font-family:Raleway;
    max-width:1400px;
    margin:auto;
    text-align:center;
  

  @media only screen and (min-width:720px) {
    display:grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    padding-left:2rem;
    

    div {
      width:100%;
    }

  }

  @media only screen and (min-width:1000px) {
    grid-template-columns: 1fr 1fr 1fr;
 
}

  

  h3, h4, h5 {
    font-family:Playfair Display;
    color:#707070;
    font-weight:normal;
    margin:0;
    margin-left:.5rem;
    margin-top:.5rem;
  }

  h3 {
    color:#565555;
  }

  h4 {
    color:#AC6D6D;
    margin-top:.2rem;
  }

  h5 {
    color:#6B8090;
    margin-top:.2rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1rem 1rem;
    padding: 0;
  }

  .archive__list-item {
    padding:1rem;
  }

  .text-container {

    color:#707070;

   

  }

  .post-image {
    position:relative;
    width:100%;
    border-radius:3px;
    transition: transform 10s cubic-bezier(.35,.9,.5,1);

    @media only screen and (min-width:720px) {
      height:55vh;

    }

  }

  .image-container {
    width:100%;
    height:100%;
    overflow:hidden;
    }

    

    .post-link {
      text-decoration:none;

      &:hover .post-image {
        transform:scale(1.1);
      }
    }

    .button-container {
    }


`

const Button = styled.section `
    width:100%;
    text-align:center;
    margin-top:2rem;

    button {
      border: 1px solid #AC6D6D;
      padding: .1rem 1rem;
      margin-top: 1rem;
      color:#AC6D6D;
      text-decoration: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-family:montserrat;
      margin-bottom:1rem;
      transition:all 0.3s ease-in-out;
    }
      
`

const PostIndex = () => (
  <StaticQuery
    query={POSTS_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <ArchiveList>
        <p>Latest Posts</p>
        <section className="featured-grid">
          
        {allMarkdownRemark.edges.map(edges => (
          
          <Link className="post-link" to={`posts/${edges.node.frontmatter.slug}`}>
          <section className="archive__list-item">
          <section className="image-container">
            <Img className="post-image" fluid={edges.node.frontmatter.featuredImage.childImageSharp.fluid} />
          </section>
          <section className="text-container">
            <h3>{edges.node.frontmatter.title}</h3>
            <h4>{edges.node.frontmatter.location}</h4>
            <h5>{edges.node.frontmatter.category}</h5>
          </section>
          
          
          </section>
          </Link>

          
        ))}

                  </section>
                  <Button><Link classname="button-container" to="/featurelisting"><button>View All</button></Link></Button>

        </ArchiveList>
      </>
    )}
  />
)


export default PostIndex

const POSTS_QUERY = graphql`
query postQuery {
	allMarkdownRemark(
    sort:{order: DESC,fields:[frontmatter___date]}
    filter: {
        fileAbsolutePath: {regex: "/posts/"}}
    limit:6
    ) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          location
          category
          date(formatString: "MMMM DD, YYYY" )
          slug
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
