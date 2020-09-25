import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import teamStyles from './team.module.scss'
import Img from "gatsby-image"

const Team = () => {
  const data = useStaticQuery(graphql`
  query teamQuery {
    file(relativePath: { eq: "Michael.jpg" }) {
      childImageSharp {
        fluid(sizes: "(max-width: 1200px) 100vw , 1200px" quality: 100) {
          ...GatsbyImageSharpFluid

        }
      }
    }
  }
`)

  return (
    <div>
      <h3> Meet the team behind this podcast </h3>
      <div className={teamStyles.container}>
        <div className={teamStyles.leftContainer}>
          <Img fluid={data.file.childImageSharp.fluid}
          alt=" picture of Michael" />
        </div>
        <div className={teamStyles.rightContainer}>
          <p>Michael T. Starks (Producer, EverydayHeroes: A
          COVID-19 Podcast) is a software developer and
          movie-maker with a background in physics. He is
          known for directing a modern adaptation of
          Macbeth(2006) and the comedy ColoradoLand(2020). He
          has produced and directed many short movies,
          including Brick’s Gambit (2018). He and his wife
          Karilyn,the owners of Ionogen Media, LLC, are known
           as the “Mom and Pop” of Colorado movie-making.
          This is his first podcast.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
