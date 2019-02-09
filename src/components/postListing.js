import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from './layout.js'
import HeaderImage from './headerImage'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Post = styled.article`
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
        padding:1rem;
        border-radius:4px;
        margin-bottom:1rem;
        margin-top:1rem;
        text-align:center;
        
        a {
            color:#115974;
            text-decoration:none;
        }
        h2 {
            margin-bottom:0;
            font-weight:normal;
        }
        h4 {
            color:#507f90;
            font-weight:normal;
        }
        p {
            font-size:0.8rem;
        }
        .read-more {
            text-decoration:underline;
            font-size:0.8rem;
            color:#c96649;
        }
`

const PostsList = styled.div`
        max-width:1600px;
        margin:auto;
        @media only screen and (min-width:720px) {
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            grid-gap:1rem;
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
        <HeaderImage />
        <PostsList>
        {posts.map(({ node }) => {
          return (
          <Post key={node.frontmatter.slug}>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />          <Link to={`/posts${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
          <h4>{node.frontmatter.date}</h4>
          <Link className='read-more' to={`/posts${node.frontmatter.slug}`}>Read More</Link>
      </Post>
          )
        })}
        </PostsList>
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

