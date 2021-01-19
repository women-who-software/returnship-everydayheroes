import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout'
import ContactForm from '../components/contactform'
import contactStyles from './contact.module.scss'
import Img from "gatsby-image"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
  query contactImage {
    file(relativePath: { eq: "yellow_mask.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid

        }
      }
    }
  }
`)
    return (
      <div id="contactformid">
          <Layout>

          <h1 className={contactStyles.full_width_header_h1}>Contact Us</h1>

              <div className={contactStyles.flex_body_container}>

              

                <div className={contactStyles.row }>
                  <div className={contactStyles.leftContainer}>

                  <ContactForm />

                  </div>

                  <div className={contactStyles.rightContainer}> 
                      <Img 
                      fluid={data.file.childImageSharp.fluid}
                      alt=" A women wearing a blue face mask"
                      />
                </div>
            
                </div>

            </div>
          </Layout>
        </div>
    );
}

export default ContactPage
