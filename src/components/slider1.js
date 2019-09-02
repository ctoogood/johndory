import React from "react"
import Slider from "react-slick";
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ContentSlider = styled.section `

 .SliderContainer {
    position:relative;
 }

 .slick-next {
     position:absolute;
     top:50%;
     right:0;
     margin-right:1rem;
 }

 .slick-prev {
    position:absolute;
    top:50%;
    left:0;
    z-index:2;
    padding:1rem;
}

.slick-dots {
    bottom:1rem;
}
  
  
  .content {
    position:relative;
    width:100%;
    z-index:10;
    background-color:black;
    height:75vh;
    min-height:400px;






    Img {
      filter:opacity(0.8);
      height:75vh;
      min-height:400px;
      overflow:visible;

      border-bottom: 0.5rem solid #d2a193;

    }

    .textContainer {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
      
      h2 {
        margin-bottom:0;
        margin-top:1rem;
        font-weight:bold;
        color:white;
        text-align:center;
        font-size:3rem;

        @media only screen and (min-width:900px) {
          font-size:4rem;
        }

        }

    }

    .viewPost {
      border: 1px solid white;
      padding: .5rem 2rem;
      margin-top: 1rem;
      color:white;
      text-decoration: none;
      background: none;
      font:1rem Montserrat;
      font-weight:400;
      cursor: pointer;
      text-align: center;
      margin-bottom:1rem;
      transition:all 0.4s ease-in-out;
      width: auto;
      margin: auto;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      margin-top: 4rem;

      &:hover {
        color:black;
        background-color: white
      }
    }
  }

  a {
      text-decoration:none;
  }

  .gatsby-image-wrapper {
    position:initial!important;
  }

`

var settings = {
    dots: true,
    autoplay: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

const SimpleSlider = () => (
  <StaticQuery
    query={SLIDE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <ContentSlider>
        <Slider {...settings} className="SliderContainer" style={{
            height:`75vh`,
            minHeight:`400px`,
        }}>
        {allMarkdownRemark.edges.map(edges => (
        <div className="content" key={edges.node.frontmatter.slug}>
        <Img
          fluid={edges.node.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div className="textContainer">
        <Link to={`posts/${edges.node.frontmatter.slug}`}>
          <h2><em>{edges.node.frontmatter.title}</em></h2>
          </Link>
          <Link to={`posts/${edges.node.frontmatter.slug}`}>
          <button className="viewPost">VIEW POST</button>
          </Link>

        </div>
      </div>

        ))}
      </Slider>
      </ContentSlider>
      </>
    )}
  />
)


export default SimpleSlider

const SLIDE_QUERY = graphql`
query SlideQuery {
	allMarkdownRemark(sort:{
    order: DESC,
    fields:[frontmatter___date]
    
  }
  limit:4
  filter: {
    frontmatter: {category: {eq: "post"}}
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
              fluid(maxWidth:1200) {
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