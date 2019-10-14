import React from "react"
import Helmet from "react-helmet"
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo'



const HeaderImage = styled.section `
    height:60vh;
    min-height:500px;
    position:relative;

    img {
        height:100%;
        width:100%;
        object-fit:cover;
        filter:brightness(0.8);
    }

    h2 {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        color:white;
        font-size:4rem;

        @media only screen and (min-width:640px) {
          font-size:6rem;
        }
    }
`

const AboutText = styled.section `
    border-top:0.5rem solid #6e929e;
    text-align:center;
    padding:2rem;
    color:#5A5A5A;


    P {
        font-size:2rem;
        font-family:playfair display;
        line-height:1.5;
        max-width:1000px;
        margin:auto;
    }
`


class About extends React.Component {

  
  render( ) {

    return (
      <Layout>
        <Helmet>
          <meta name="p:domain_verify" content="292f8a827f24bff0a8377677d0604f66"/>
        </Helmet>
        <SEO title="About" keywords={[`blog`, `food`, `drink`, `documentary`, `photography`, `travel`, `food & drink`, `produce`]}/>
        <HeaderImage>
            <img src="https://res.cloudinary.com/johndory/image/upload/v1568614509/posts/waasbakery/waas-bakery-scene-8_umzlrx.jpg" alt="bakery scene"/>
            <h2>About</h2>
        </HeaderImage>
        <AboutText>
          <p>Food & drink can provide a window into different cultures & ways of life across the globe. There is a lot of passion surrounding food & drink, from those working within the industry to those who partake in culinary experiences.
            </p><br />
          <p>This site is a display of images and text hoping to capture this passion as well as the variety of produce throughout the world of food & drink.</p>
        </AboutText>
        
        
        
  </Layout>

    )}}

export default About



