import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const aboutPage = () => (
  <Layout>
    <SEO title="about me" />
    {/* about me page
---- photo of me and muppet fox
----Contact via facebook
" Annika Leisure is a puppeteer based in Atlanta, Georgia. For more information and up to date news, please visit me on favebook" */}


    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutPage
