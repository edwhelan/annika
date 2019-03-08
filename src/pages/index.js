import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import dragon from '../images/dragonPuppetShow.jpg'
import litefear from '../images/monstermash.jpg'
import giantskeleton from '../images/largePuppet.jpg'
import invulncat from '../images/invulnerableCat.jpg'
import ladywriting from '../images/puppetAtDesk.jpg'
import foampuppet from '../images/feltPuppet.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Annika`, `Leisure`, `Puppetry`]} />
    <div className='selected-works-wrapper'>
    <div className="scrolling-wrapper-flexbox">
      <div className="card"><img src={dragon} alt='dragon puppet show'/></div>
      <div className="card"><img src={litefear} alt=''/></div>
      <div className="card"><img src={giantskeleton} alt=''/></div>
      <div className="card"><img src={invulncat} alt=''/></div>
      <div className="card"><img src={ladywriting} alt=''/></div>
      <div className="card"><img src={foampuppet} alt=''/></div>
    </div>
    </div>

  </Layout>
)

export default IndexPage
