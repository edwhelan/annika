import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import litefear from '../images/monstermash.jpg'
import giantskeleton from '../images/largePuppet.jpg'
import invulncat from '../images/invulnerableCat.jpg'
import ladywriting from '../images/puppetAtDesk.jpg'
import foampuppet from '../images/feltPuppet.jpg'

// Select works page 
// --- photo one- lite fear
// --- photo two- giant skeleton
// --- photo three- the invulnerable cat
// --- photo four- lady writing (color)
// --- photo five- foam puppet
// ----- asks them to visit facebook and YouTube for more works

const worksPage = () => (
  <Layout>
    <SEO title="Selected Works" />
    <div className="scrolling-wrapper-flexbox">
      <div className="card"><img src={litefear} alt=''/></div>
      <div className="card"><img src={giantskeleton} alt=''/></div>
      <div className="card"><img src={invulncat} alt=''/></div>
      <div className="card"><img src={ladywriting} alt=''/></div>
      <div className="card"><img src={foampuppet} alt=''/></div>
    </div>
  </Layout>
)

export default worksPage
