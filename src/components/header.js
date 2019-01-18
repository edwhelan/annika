import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import {FaYoutube, FaFacebookSquare} from 'react-icons/fa';

const Header = ({ siteTitle }) => (
  
  <div className='top-nav'>
    <div
      className='nav-bar'
      style={{
        marginBottom: `1.45rem`,
      }}
    >
        <div className='nav-icons'>
          <a href='https://www.youtube.com/channel/UCFUJKiHk4pKEzR-hLhBBWPg'><FaYoutube /></a>
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
        <a href='https://facebook.com/AnnikasLeisure'><FaFacebookSquare /></a>
      </div>
    </div>
            <div className='bot-nav'>
            <Link to='/works'> works</Link>
            <Link to='/about' > about</Link>
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
