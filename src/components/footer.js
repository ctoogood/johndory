import React from 'react'
import styled from 'styled-components'
import Email from '../components/email'


const FooterContainer = styled.div`
height:auto;
background-color:#406f7d;
width:100%;
color:white;
margin:0;
border-top: 0.5rem solid #6e929e;


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
        <Email />
        <p>thejohndoryuk@gmail.com<br /><br />© {new Date().getFullYear()}</p>
    </FooterContainer>
  )
  
  export default Footer