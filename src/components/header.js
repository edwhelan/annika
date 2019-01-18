import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import {FaYoutube, FaFacebookSquare} from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  <div
    className='nav-bar'
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
      <div className='nav-icons'>
        <a href='#'><FaYoutube /></a>
      </div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className='nav-icons'>
      <a href='#'><FaFacebookSquare /></a>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
