import React from 'react'
//import {Link} from 'gatsby'

import Layout from '../components/layout'
import StoryForm from '../components/form'

// To implement a link to a page do :  <Link to="/contact"> Contact us.</Link>

const IndexPage = () => {
  return(
    <div>
        <Layout>
          <h1> Celebrating COVID-19 Heroes</h1>

          <p> Hello! We're creating a podcast that features Everyday Heroes who are willing to tell 
              their stories and to share the impact they've made during the COVID-19 pandemic.
               Fill out this form if you have a story you would like to share. </p>
              
          <StoryForm/>      
          

        </Layout> 

    </div>
  )
}

export default IndexPage