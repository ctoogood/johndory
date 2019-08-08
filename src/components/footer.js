import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
height:auto;
background-color:#406f7d;
width:100%;
color:white;
margin:0;

    p {
        padding:2rem;
        text-align:center;
        margin-bottom:0;
    }

    a {
        color:white;
    }
`

const Footer = () => (
    <FooterContainer >
        <p>thejohndoryuk@gmail.com<br /><br />© {new Date().getFullYear()}</p>
    </FooterContainer>
  )
  
  export default Footer