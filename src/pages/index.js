import React from "react"
import Layout from "../components/layout"
import StoryForm from "../components/form"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import IndexStyles from "../styles/index.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "blue_mask.jpg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <div>
      
      <Layout>
        <div className={IndexStyles.row}>
          <div className={IndexStyles.col_50}>
            <h1> Celebrating COVID-19 Heroes</h1>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt=" A women wearing a blue face mask"
            />
            <p>
              {" "}
              Hello! We're creating a podcast that features Everyday Heroes who
              are willing to tell their stories and to share the impact they've
              made during the COVID-19 pandemic. Fill out this form if you have
              a story you would like to share.{" "}
            </p>
          </div>

          <div className={IndexStyles.col_50}></div>
        </div>

        <StoryForm />
      </Layout>
    </div>
  )
}

export default IndexPage
