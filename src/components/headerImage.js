import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderImageWrapper = styled.div`
  display:none;
  height:100%;
   background-color:#464646;
   position:relative;
   margin-bottom:1rem;
   overflow:hidden;
   border-bottom:.5rem solid #d2a193;
   @media only screen and (min-width:480px) {
     display:block;
   }
   @media only screen and (min-width:720px) {
    height:70vh;
    }

    Img {
        filter:opacity(.7);
        height:100%;
        width:100%;
        object-position:center!important;
        object-fit:cover!important;
    }

    h2 {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        text-align:center;
        color:white;
        font-size:2rem;
        font-weight:bolder;
            @media only screen and (min-width:720px) {
                font-size:4rem;
            }
          }
`

const HeaderImageBorder = styled.div`
  display:none;
  border-bottom:.5rem solid #6e929e;
  height:1rem;
  //box-shadow: 0px 7px 7px rgba(0,0,0,0.2);

  @media only screen and (min-width:480px) {
    display:block;
  }
`



const HeaderImage = () => (
    <div>
    <HeaderImageWrapper>
    <StaticQuery
      query={graphql`
        query {
         headerImage: file(relativePath: { eq: "IMG_0315.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => 
        <Img style={{ objectPosition:`center`, height:'100%' }} fluid={data.headerImage.childImageSharp.fluid} />    
    }/>
    <h2>Stories about great local food & drink</h2>
    </HeaderImageWrapper>
    <HeaderImageBorder />
    </div>
  )
  export default HeaderImage