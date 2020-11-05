import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import teamStyles from './meet.module.scss'
//import Bio from '../content/teambio.json'
import Img from "gatsby-image"

const Meet = () => {
  const data = useStaticQuery(graphql`
  query meetQuery {
    allFile(
      filter: {
        extension: { regex: "/(jpg)||(jpeg)/" }
        relativeDirectory: { eq: "assets" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(sizes: "(max-width: 1200px) 100vw , 1200px" quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  return (
    <div>
      <div>
        <h3> Meet the team behind this podcast </h3>
        <div className={teamStyles.container}>
          <div className={teamStyles.leftContainer}>
            {data.allFile.edges.map(image => (
              <Img
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split(".")[0]}
                style={{ border: "2px solid #fff", borderRadius: 5, height: 300 }}
              />
            ))}
          </div>
          <div className={teamStyles.rightContainer}>
            <p>Glenda O’Neill (Advisor) is originally from Northern Ireland.
            She works at Terumo BCT and has served as President of the
            Terumo BCT Toastmasters organization.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Michael T. Starks (Producer, EverydayHeroes: A COVID-19
              Podcast) is a software developer and movie-maker with a
              background in physics. He is known for directing a modern
              adaptation of Macbeth(2006) and the comedy ColoradoLand(2020).
              He has produced and directed many short movies, including
              Brick’s Gambit (2018). He and his wife Karilyn,the owners of
              Ionogen Media, LLC, are known as the “Mom and Pop” of
              Colorado movie-making. This is his first podcast.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p>Pam Renall (Advisor) is an Actress, Host and Producer, known
            for her most recent role in Unfollower, a thriller feature film
            about cyber stalking. Pam is also in pre-production on several
            television and film projects. Pam is both a Comedic and Dramatic
            Actress trained in Colorado, and is local hire in LA, Atlanta,
            New Mexico and New Zealand.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Rhonda Peters (Advisor) serves as an Area Director for
            Toastmasters in Colorado.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Angela Rothermel is the Host of EverydayHeroes podcast. She
            is an actress who lives and works in Colorado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meet
