import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

import twitter from '../content/images/twitter-logo-silhouette.svg'
import instagram from '../content/images/instagram-logo.svg'

const HeaderWrapper = styled.div`
  background:white;
  padding-bottom:.1rem;
  text-align:center;
  position:relative;
  left:0;
  top:0;
  z-index:100;
  box-shadow:0px 2px 2px rgba(0,0,0,0.1);

`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem;
  padding-bottom:0;
`;

const HeaderText = styled.h1`
  font-size:1.5rem;
  @media only screen and (min-width:720px) {
  }
`

const SubheaderText = styled.h4`
  font-family: Playfair Display;
  font-size:1rem;
  margin:0;
  @media only screen and (min-width:720px) {
    margin-bottom:.5rem;
  }
`

const Social = styled.div `
@media only screen and (min-width:720px) {
  position:absolute;
  right:7rem;
  bottom:0rem;
}



  img {
    width:10px;
    margin:0.5rem;
    @media only screen and (min-width:720px) {
      margin:1rem;
      width:20px;
    }
  }
`

const Header = ({ siteTitle, siteSubtitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
        <Link
          to="/"
          style={{
            color: `#115974`,
            textDecoration: `none`,
          }}
        >
          <HeaderText style={{ margin: 0 }}>{siteTitle}</HeaderText>
          <SubheaderText style={{color:`#ab4f34`}}><em>{siteSubtitle}</em></SubheaderText>
        </Link>
        <Menu />

      </HeaderContainer>
      <Social>
        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/thejohndoryuk"><img src={twitter} alt="twitter logo" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johndoryuk/"><img src={instagram} alt="instagram logo" /></a>
      </Social>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
