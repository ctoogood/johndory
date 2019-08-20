import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const FormSuccess = () => (
  <Layout>
    <SEO title="Subscription Form Success" />
    <h1>Thanks for subscribing</h1>
    <p>You'll receive new updates direct to your inbox</p>
    <p><Link to='/'>Click Here</Link> to return to the home page</p>
  </Layout>
)

export default FormSuccess