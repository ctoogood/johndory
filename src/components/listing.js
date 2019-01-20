import React from 'react'
import {Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql `
    query blogPostListing {
        allMarkdownRemark (limit:10, sort:{
            order:DESC
            fields:[frontmatter___date]
        }) {
            edges {
            node {
                excerpt
                frontmatter {
                date(formatString: "MMMM DD, YYYY" )
                title
                slug
                }
            }
            }
        }
        }
`

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
        @media only screen and (min-width:720px) {
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            grid-gap:1rem;
        }
`

const Listing = () => (
  <PostsList>
    <StaticQuery
        query={LISTING_QUERY}
        render={( {allMarkdownRemark}) => (
            allMarkdownRemark.edges.map( ( {node} ) => (
                <Post key={node.frontmatter.slug}>
                    <Link to={`/posts${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
                    <h4>{node.frontmatter.date}</h4>
                    <p>{node.excerpt}</p>
                    <Link class='read-more' to={`/posts${node.frontmatter.slug}`}>Read More</Link>
                </Post>
            ))
        )}
    />
  </PostsList>
)

export default Listing
