import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import muppetfox from '../images/annikaWithPuppet.jpg'

const aboutPage = () => (
  <Layout>
    <SEO title="about me" />
    {/* about me page
---- photo of me and muppet fox
----Contact via facebook
" Annika Leisure is a puppeteer based in Atlanta, Georgia. For more information and up to date news, please visit me on favebook" */}
    <div className='about-page-wrapper'>
      <p>Annika Leisure is a puppeteer based in Atlanta, Georgia. For more information and up to date news, please visit me on facebook</p>
      <img src={muppetfox} alt='annika with muppet fox' />
    </div>
  </Layout>
)

export default aboutPage
