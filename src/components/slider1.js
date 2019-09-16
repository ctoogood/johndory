import React from "react"
import Slider from "react-slick";
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

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
    max-height:80vh;
    min-height:400px;
    border-bottom: 0.5rem solid #d2a193;
    overflow:hidden;
    background-color:black;

    @media only screen and (min-width:800px) {
      background-color:white;
    }


    .grid {
      @media only screen and (min-width:800px) {
        display:grid;
        grid-template-columns:3fr 2fr;
      }
    }

    .image-container {
      position:relative;
      max-height:80vh;
      width:100%;
      filter:opacity(0.7);

      @media only screen and (min-width:800px) {
        filter:none;
      }
    }




    Img {
      min-height:400px;
      overflow:hidden
      
    }

    .textContainer {
        position:absolute;
        top:50%;
        left:0;
        transform:translateY(-50%);
        margin-top:3rem;
        max-height:80vh;
        text-align:center;
        width:100%;
        color:white;

        @media only screen and (min-width:800px) {
          position:relative;
          top:0;
          transform:translate(0);
          text-align:left;
          padding:1rem;
          margin-top:3rem;
          color:#565555;
        }

        h2, h3, h4, h5 {
          font-family:playfair display;
        }
      
        h2 {
          color:white;
          font-weight:bold;
          font-size:2.5rem;

          @media only screen and (min-width:800px) {
            margin:0.5rem;
            margin-left:0;
            color:#565555;
            font-size:3rem;

          }
        }

        h3 {
          color:white;
          opacity:0.8;
          margin-bottom:0.5rem;
          font-size:2rem;
          @media only screen and (min-width:800px) {
            font-size:2.5rem;
            color:#6B8090;

          }
        }


        h4 {
          display:none;
          @media only screen and (min-width:900px) {
            display:block;

          }
        }
        
        h5 {
          @media only screen and (min-width:900px) {
            margin-left:0.1rem;
          }

        }

        hr {
          display: none;
          height: 0px;
          border: 0;
          border-top: 1px solid #d2a193;
          background-color: #d2a193;
          margin: auto;
          padding: 0;
          width:50%;
    
          @media only screen and (min-width:800px) {
            margin:0;
            display:block;
          }
        }

        div {

        }

    }

    .viewPost {
      border: 1px solid #d2a193;;
      padding: .5rem 2rem;
      margin-top: 0;
      color:#d2a193;
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
      left: 0;
      margin-top: 1rem;

      &:hover {
        color:white;
        border:1px solid white;
        background-color: #d2a193
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
    autoplaySpeed: 4000,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

const SimpleSlider = () => (
  <StaticQuery
    query={SLIDE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <ContentSlider>
        <Slider {...settings} className="SliderContainer" style={{
            maxHeight:`80vh`,
            minHeight:`400px`,
        }}>
        {allMarkdownRemark.edges.map(edges => (
        <div className="content" key={edges.node.frontmatter.slug}>
          <div className="grid">
            <div className="image-container">
          <img
            src={edges.node.frontmatter.featuredImage.publicURL}
            alt={edges.node.frontmatter.title}
          />
          </div>
        <div className="textContainer">
          <div>
          <h3>Featured</h3> 
          <hr />
          <Link to={`posts/${edges.node.frontmatter.slug}`}>
          <h2><em>{edges.node.frontmatter.title}</em></h2>
          </Link>
          <h5><em>{edges.node.frontmatter.location}</em></h5>
          <h4>{edges.node.frontmatter.description}</h4>
          <Link to={`posts/${edges.node.frontmatter.slug}`}>
          <button className="viewPost">VIEW POST</button>
          </Link>
          </div>

        </div>
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
    fileAbsolutePath: {regex: "/posts/"}
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
            publicURL
          }
        }
      }
    }
  }
}
`