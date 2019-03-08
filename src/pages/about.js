import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import annika from '../images/annika.jpg'

const aboutPage = () => (
  <Layout>
    <SEO title="about me" />
    {/* about me page
---- photo of me and muppet fox
----Contact via facebook
" Annika Leisure is a puppeteer based in Atlanta, Georgia. For more information and up to date news, please visit me on favebook" */}
    <div className='about-page-wrapper'>
      <div className='picture-box'><img src={annika} alt='annika with boa muppet' /></div>
      <div className='text-box'><p>Annika Leisure is a puppeteer based in Atlanta, Georgia. For more information and up to date news, please visit me on favebook</p></div>
    </div>
  </Layout>
)

export default aboutPage
