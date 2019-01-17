import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Opening page
// ----- with picture of us doing dragon puppet show
// --- icon links to fb and youtube?

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Annika`, `Leisure`, `Puppetry`]} />
    <p>Welcome to annikas page.</p>


    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
