import React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import podcastStyles from './podcast.module.scss'
import podcastCover from "../images/eh__cover.png"
import playButton from "../images/play_white.png"

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
                }
                fields{
                  slug
                }
              }
            }
          }
        }
  `)

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
                                  src={podcastCover}
                                  alt="podcast episode cover"></img>   
                              </div>
                                
                                <h3>{edge.node.frontmatter.videoTitle} </h3>
                                
                                <h4> {edge.node.frontmatter.date} </h4>
                                <h5> {edge.node.frontmatter.authors}</h5>
                              
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
