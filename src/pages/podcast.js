import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import podcastStyles from './podcast.module.scss'
//import podcastCover from "../images/eh__cover.png"
//import playButton from "../images/play_white.png"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PodcastPage = ({data}) => {

    return (
        <div>
            <Layout>
            <h1 className={podcastStyles.full_width_header_h1}>Podcast </h1>

                <div className={podcastStyles.container}>
                

                  <ol className={podcastStyles.podcasts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return(

                          <Link to={`/episode/${edge.node.fields.slug}`}>
                            <li className={podcastStyles.podcast}>
                              <div className={podcastStyles.episodeCover}> 
                                
                                  <PreviewCompatibleImage
                                    imageInfo={{
                                      image: edge.node.frontmatter.guestPhoto,
                                      alt: "podcast episode cover",
                                      }}
                                   />
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
                childImageSharp {
                  fluid(maxWidth: 250, quality: 100, maxHeight: 250 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
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
