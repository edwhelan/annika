import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import dragon from '../images/dragonPuppetShow.jpg'

// Opening page
// ----- with picture of us doing dragon puppet show
// --- icon links to fb and youtube?

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Annika`, `Leisure`, `Puppetry`]} />
      <div className='home'>
        <img src={dragon} alt='shadow puppetry show' />
      </div>

  </Layout>
)

export default IndexPage
