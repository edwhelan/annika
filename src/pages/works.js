import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Select works page 
// --- photo one- lite fear
// --- photo two- giant skeleton
// --- photo three- the invulnerable cat
// --- photo four- lady writing (color)
// --- photo five- foam puppet
// ----- asks them to visit facebook and YouTube for more works
// https://facebook.com/AnnikasLeisure
// https://www.youtube.com/channel/UCFUJKiHk4pKEzR-hLhBBWPg

const worksPage = () => (
  <Layout>
    <SEO title="Selected Works" />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default worksPage
