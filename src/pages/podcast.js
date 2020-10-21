import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import podcastStyles from './podcast.module.scss'
import podcastCover from "../images/eh__cover.png"
//import playButton from "../images/play_white.png"

const PodcastPage = ({data}) => {

    return (
        <div>
            <Layout>
                <h2> Podcast </h2>

                <div className={podcastStyles.container}>
                

                  <ol className={podcastStyles.podcasts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(

                          <Link to={`/episode/${edge.node.fields.slug}`}>
                            <li className={podcastStyles.podcast}>
                              <div className={podcastStyles.episodeCover}> 
                                <img className={podcastStyles.img_ep_cover}
                                  // Trying to pull in each picture of the guest from each of the relative path from Episodes folder 
                                  // but its not working
                                  //src={`../episodes/ep${edge.node.frontmatter.episodeNumber}/${edge.node.frontmatter.guestPhoto}`}
                                  src={podcastCover}
                                  alt="podcast episode cover" ></img>   
                              </div>
                                
                                <h3>{edge.node.frontmatter.title} </h3>
                                <h4> {edge.node.frontmatter.date} </h4>
                                <h5> {edge.node.frontmatter.guestName}</h5>
                              
                            </li></Link>

                        )
                    })}
                  </ol>

                </div>

            </Layout>

        </div>
        
    )
}

export default PodcastPage

export const pageQuery = graphql`
query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
      edges{
        node{
          frontmatter{
              title
              date (formatString: "MMMM DD, YYYY")
              guestName
              guestPhoto{
                relativePath
                absolutePath
                extension
              }
              episodeNumber
             
          }
          fields{
            slug
          }
        }
      }
    }
  }
`
