import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background:white;
  margin-bottom:1rem;
  text-align:center;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem;
  padding-bottom:0;
`;

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
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
          <h4 style={{color:`#ab4f34`}}><em>{siteSubtitle}</em></h4>
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
