import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from './layout'
import styled from 'styled-components'
import SEO from './seo'
import kebabCase from 'lodash.kebabcase'

const ImageGallery = styled.section `

`

const PostGrid = styled.section `
position:relative;
text-align:center;
@media only screen and (min-width:720px) {
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:3rem;
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

const NavContainer = styled.div `
        position:relative;
        width:100%;
        height:4rem;
        padding-top:1rem;
        
`

const NextPage = styled(Link) `
        color:#6d6b79;
        text-decoration:none;
        position:absolute;
        right:0;
        margin-right:1rem;
`
const PrevPage = styled(Link) `
       color:#6d6b79;  
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
          color:#6d6b79;
          text-decoration:none;
          padding:.5rem;
        }
`

const ListingHeader = styled.section `
    text-align:center;
    max-width:1200px;
    margin:auto;

    h1 {
      overflow: hidden;
      text-align: center;
      margin:1rem;
      padding-bottom:1rem;
  }
  h1:before,
  h1:after {
      background-color: #000;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
  }
  h1:before {
      right: 0.5em;
      margin-left: -50%;
  }
  h1:after {
      left: 0.5em;
      margin-right: -50%;
  }

    .listingList {
      padding:1rem;
      text-decoration:none;
      color:inherit;

    }

    button {
      border: none;
      border-radius:15px;
      padding: .1rem 1rem;
      margin: 1rem;
      color:white;
      text-decoration: none;
      background: #d2a193;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-family:montserrat;

      &:nth-child(3) {
        background:#E8C593;
      }
  
      &:nth-child(4) {
        background:#BDC7C6;
      }
  
      &:nth-child(5) {
        background:#B8B0BF
      }
    }
    
    button:hover,
    button:focus {
      background: none;
      color:#d2a193;
    }
    
    button:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
    }
    
    button:active {
      transform: scale(0.99);
    }
`




class GalleryListing extends React.Component {

  
  render( ) {

    const posts = this.props.data.allMarkdownRemark.edges
    const { currentPage, numPages, category, allCategories } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()


    return (
      <Layout>
        <Helmet>
          <meta name="p:domain_verify" content="292f8a827f24bff0a8377677d0604f66"/>
        </Helmet>
        <SEO title="Food Photography" keywords={[`blog`, `food`, `drink`, `documentary`, `photography`, `travel`, `food & drink`, `produce`]}/>
        <ListingHeader>
          <h1><em>{category}</em></h1>
          {allCategories.map(cat => (
            <button key={cat}>
              <Link className="listingList" to={`/gallery/category/${kebabCase(cat)}`}>{cat}</Link>
            </button>          
          ))}
        </ListingHeader>
        <ImageGallery>
        <PostList>
        <PostGrid>
          {posts.map(({ node }) => {
            return (
            <Post key={node.frontmatter.slug} >
                <Link to={`/posts${node.frontmatter.slug}`}>

                <div className="image-container">
                    <Img className="post-image" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                </div>
              
                </Link>
            </Post>
                )
              })}
              </PostGrid>
              </PostList>
        
        </ImageGallery>
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
                to={`gallery/category/${kebabCase(category)}/${i === 0 ? '' : i + 1}`}
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
                      <PrevPage to={`gallery/category/${kebabCase(category)}/${prevPage}`} rel="prev">
                        ← Previous Page
                      </PrevPage>
                    )}
                    {!isLast && (
                      <NextPage to={`gallery/category/${kebabCase(category)}/${nextPage}`} rel="next">
                        Next Page →
                      </NextPage>
                    )}
                    </NavContainer>
        
        
  </Layout>

    )}}

export default GalleryListing

export const pageQuery = graphql`
  query categoryQuery($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: {subject: { in: [$category] }}
      }
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


