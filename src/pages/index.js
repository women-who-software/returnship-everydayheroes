import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => {
  return(
    <div>
        <Layout>
          <h1> Home</h1>
          <h2> Welcome to our page </h2>
          <p> Intrested in being on the podcast ? <Link to="/contact"> Contact us.</Link></p>

        </Layout> 

    </div>
  )
}

export default IndexPage