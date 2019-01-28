import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background:white;
  padding-bottom:.1rem;
  text-align:center;
  box-shadow: 0px 7px 7px rgba(0,0,0,0.5);
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem;
  padding-bottom:0;
`;

const HeaderText = styled.h1`
  font-weight:normal;
`

const SubheaderText = styled.h4`
  font-weight:normal;
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
