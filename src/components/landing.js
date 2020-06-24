import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import landingStyles from './landing.module.scss'
import Img from "gatsby-image"

const LandingPage = () =>{
    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "blue_mask.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid

          }
        }
      }
    }
  `)
    return (
        <div className={landingStyles.flex_body_container}>

        <h2>Welcome to Everyday Heroes, a COVID-19 Podcast!</h2>
        <div className={landingStyles.row }>
          <div className={landingStyles.leftContainer}>
            
            <p>
              {" "}
              Hello! We're creating a podcast that features Everyday Heroes who
              are willing to tell their stories and to share the impact they've
              made during the COVID-19 pandemic. <br /><br />
              This has been a very difficult 
              time for many people. We're not going to shy away from sharing very
               real problems and tough choices. At the same time, we want to feature 
               stories that are hopeful and that may inspire others.<br /><br />

                We would like your help. <br /><br />

                We want you to share your stories. While you may not think
                of yourself as a hero, don't minimize the efforts you've made to help 
                others during these tough days. <br /><br />
                
                Fill out this form if you have a story you would like to share.{" "}
            </p>
          </div>

          <div className={landingStyles.rightContainer}> 
            <Img 
            fluid={data.file.childImageSharp.fluid}
            alt=" A women wearing a blue face mask"
            />
          </div>

          </div>
          </div>
    )
}

export default LandingPage