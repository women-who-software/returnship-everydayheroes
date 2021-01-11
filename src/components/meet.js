import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import teamStyles from './meet.module.scss'
//import Img from "gatsby-image"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


const Meet = () => {
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark(
      sort: { fields: [frontmatter___memberNumber], order: ASC }
      filter: {fields: { collection: {eq: "member"}}}
      ){
      edges{
        node{
          frontmatter{
              memberName
              memberNumber
            	memberPhoto{
                childImageSharp {
                  fluid(maxWidth: 250, quality: 100, maxHeight: 250 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            } 
          html
          }
        }
      }
    }
`)

  return (
    <div>
        <h3> Meet the team behind this podcast </h3>
        <div className={teamStyles.container}>

          <ol className={teamStyles.members}>

          {data.allMarkdownRemark.edges.map((edge) => {
            return(
                <li className={teamStyles.podcast}>
                  <div className={teamStyles.img_member_cover}> 
                    
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: edge.node.frontmatter.memberPhoto,
                          alt: "photo of podcast team member",
                          }}
                       />
                  </div>
                    
                    <h3>{edge.node.frontmatter.memberName} </h3>
                    <div dangerouslySetInnerHTML={{__html:edge.node.html}}></div>
                </li>
            )
            })}
          
          </ol>

        </div>
    </div>
  )
}

export default Meet
