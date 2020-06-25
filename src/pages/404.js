import React from 'react'
import {Link} from 'gatsby'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from '../components/layout'

const ErrorPage = () => {

    const data = useStaticQuery(graphql`
    query errorQuery {
      file(relativePath: { eq: "virus.jpg" }) {
        childImageSharp {
          fluid(grayscale: true, quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div>
        
            <Layout>
                <h2> 404: Page Not Found </h2>
                <h3> Something went wrong!  </h3>
                <p> The page you are looking for cannot be found. Click <Link to="/" > here</Link> go back home. </p>
                <Img
                fluid={data.file.childImageSharp.fluid}
                alt=" A man in a face mask surrounded by Covid virus spores"
              />
                
                
            </Layout>

        </div>
    )
}

export default ErrorPage 