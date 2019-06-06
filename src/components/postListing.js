import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from './layout.js'
import HeaderImage from './headerImage'
import Img from 'gatsby-image'
import styled from 'styled-components'
import SEO from './seo'


const Post = styled.article`
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
        border:1rem solid white;
        border-radius:7px;
        text-align:center;
        position:relative;
        overflow:hidden;
        transition:all .2s ease-in-out;
        font-family: Playfair Display;
        margin:1rem;

        @media only screen and (min-width:720px) {
          margin:0;
        }
        
        a {
            color:#115974;
            text-decoration:none;
        }
        h2 {
            margin-bottom:0;
            font-weight:normal;
            color:#c96649;
        }
        h3 {
          margin-bottom:5px;
          color:#507f90;
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
          position:absolute;
          bottom:-2px;
          left:50%;
          transform:translate(-50%,-0%);
          background-color:white;
          width:75%;
          border-radius:7px 7px 0px 0px;
          

          @media only screen and (min-width:1100px) {
            width:75%;
          }
        }

        &:hover {
          transform:scale(1.01);

          .image-container {
            background-color:white;
          }
    
          }
        }
`

const PostsListContainer = styled.section `
        position:relative;
`

const PostsList = styled.div`
        max-width:1100px;
        position:relative;
        margin:auto;
        margin-top:1rem;
        @media only screen and (min-width:720px) {
            display:grid;
            grid-template-columns:1fr 1fr;
            grid-gap:1rem;

        }
        @media only screen and (min-width:1100px) {
          grid-template-columns:1fr 1fr 1fr;
      }
`
const NavContainer = styled.div `
        position:relative;
        width:100%;
        height:4rem;
        padding-top:1rem;

`

const NextPage = styled(Link) `
        color:#c96649;
        text-decoration:none;
        position:absolute;
        right:0;
        margin-right:1rem;
`
const PrevPage = styled(Link) `
       color:#c96649;  
       text-decoration:none;
        position:absolute;
        left:0;
        margin-left:1rem;
`
const PageNum = styled.div `
        position:absolute;
        right:50%;

        li {
          list-style-type:none;
          display:inline;
        }

        .page-numbers {
          color:#c96649;
          text-decoration:none;
          padding:.5rem;
        }
`



class BlogIndex extends React.Component {

  
  render( ) {

    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (

      <Layout>
        <SEO title="Home" keywords={[`blog`, `food`, `drink`, `documentary`, `shetland`, `scotland`, `food & drink`, `produce`]}/>
        <HeaderImage />
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
            <h3>{node.frontmatter.location}</h3>
          </div>
          </Link>
      </Post>
          )
        })}
        </PostsList>
        </PostsListContainer>
        <NavContainer>
        <PageNum>
        {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link className='page-numbers'
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  textDecoration: i + 1 === currentPage ? 'underline' : '',

                }}
              >
                {i + 1}
              </Link>
</li>
      ))}
      </PageNum>
        {!isFirst && (
        <PrevPage to={prevPage} rel="prev">
          ← Previous Page
        </PrevPage>
      )}
      {!isLast && (
        <NextPage to={nextPage} rel="next">
          Next Page →
        </NextPage>
      )}
      </NavContainer>
  </Layout>

    )}}

export default BlogIndex

export const pageQuery = graphql`
  query ListingQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            location
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
    }
  }
`

