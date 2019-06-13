import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background:white;
  padding-bottom:.1rem;
  text-align:center;
  position:sticky;
  left:0;
  top:0;
  z-index:2;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);

`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem;
  padding-bottom:0;
`;

const HeaderText = styled.h1`
  
`

const SubheaderText = styled.h4`
  font-family: Playfair Display;
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
      </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
