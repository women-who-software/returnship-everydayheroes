import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery } from 'gatsby'
import Video from "../components/video"


const PodcastPage = () => {

    const data = useStaticQuery (graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                videoTitle
                date (formatString: "MMMM DD, YYYY")
                videoSourceURL
                authors
                text
                path
              }
              html
            }
          }
        }
      }
  `)

    return (
        <div>
            <Layout>
                <h2> Podcast </h2>
                <ul >
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(
                            <li>
                                <h3>{edge.node.frontmatter.videoTitle} </h3>
                                <h4> {edge.node.frontmatter.date} </h4>
                                <h5> {edge.node.frontmatter.authors}</h5>
                                <p>{edge.node.frontmatter.text}</p>
                                <Video videoSrcURL={edge.node.frontmatter.videoSourceURL} 
                                        videoTitle={edge.node.frontmatter.videoTitle} />
                                        
                            </li>
                        )
                    })}
                
                
                </ul>
            
                
            </Layout>

        </div>
    )
}

export default PodcastPage 