import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const SuccessPage = () => {

    const data = useStaticQuery(graphql`
    query successQuery {
      file(relativePath: { eq: "tp.jpg" }) {
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
                <h2> Thank you </h2>
                <h3>We'll get back to you soon. </h3>
                <p> Click <Link to="/"> here</Link> to go back to our home page. </p>
                <Img
                fluid={data.file.childImageSharp.fluid}
                alt=" Stacked toilet paper rolls"
              />
                
            </Layout>

        </div>
    )
}

export default SuccessPage 