import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
height:6rem;;
background-color:#406f7d;
width:100%;
color:white;

    p {
        padding:1rem;
        text-align:center;
    }

    a {
        color:white;
    }
`

const Footer = () => (
    <FooterContainer >
        <p>© {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a></p>
    </FooterContainer>
  )
  
  export default Footer