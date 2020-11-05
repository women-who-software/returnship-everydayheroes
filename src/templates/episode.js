import React from "react"
import  {graphql}  from "gatsby"
import Layout from '../components/layout'
import Video from "../components/video"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import epiStyles from './episode.module.scss'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
//import remark from 'remark'
//import remarkHTML from 'remark-html'

export const query= graphql`
        query ($slug:String!){
            markdownRemark(
            fields: {slug:{eq: $slug}}){
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
                guestBio
                episodeNumber
                vim_ep_num
                buz_ep_url

            }
            html
        } 
    } 
`

const Episode = (props) => {

     //Build each episodes Vimeo path with vim_ep_num data from markdown
    // format needed to build: "https://player.vimeo.com/video/430343600?app_id=122963"
    let vimeoURL = props.data.markdownRemark.frontmatter.vim_ep_num;
    let fullVideoURLBuilder = `https://player.vimeo.com/video/${vimeoURL}?app_id=122963`;


    return(
        
        <Layout>
        <div className={epiStyles.full_width_image_container}>

            <div className={epiStyles.full_width_image_stack}>
                
                <h1 className={epiStyles.full_width_header_h1}>{props.data.markdownRemark.frontmatter.title}</h1>
                <h3 className={epiStyles.full_width_header_h3}> Date Published: {props.data.markdownRemark.frontmatter.date} </h3>
                
            </div>
        </div>
                        
                    
            <div className={epiStyles.flex_body_container}>

            <div className={epiStyles.row}>

                <div className={epiStyles.grid}>

                            <div className={epiStyles.box}>
                                <Video videoSrcURL= {fullVideoURLBuilder}
                                        title={props.data.markdownRemark.frontmatter.title} />
                            </div>
                            

                            <div className={epiStyles.box}> 
                            <h2>Audio only</h2>
                                    <div className={epiStyles.AudioPlayer}><AudioPlayer 
                                    autoPlay={false}
                                    src={props.data.markdownRemark.frontmatter.buz_ep_url}
                                    onPlay={e => console.log("onPlay")}
                                    showJumpControls={false}
                                    customAdditionalControls={[]}
                                    
                                /></div>

                            </div>
                </div>
            </div>
                    
                    <div className={epiStyles.row}>

                        <div className={epiStyles.grid}>

                            <div className={epiStyles.box}> 
                            <h1>{props.data.markdownRemark.frontmatter.guestName}</h1>
                                <p>{props.data.markdownRemark.frontmatter.guestBio}</p>
                            </div>

                            <div className={epiStyles.box}>

                                <div className={epiStyles.guestPhoto}>
                                    <PreviewCompatibleImage
                                    imageInfo={{
                                    image: props.data.markdownRemark.frontmatter.guestPhoto,
                                    alt: "featured guest",
                                    }}
                                    />
                                </div>
                            </div>

                            
                        </div>
                    </div>
                 

                   
                        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>


                        
                        
                        <p>Credits
                        EVERYDAY HEROES: A COVID-19 Podcast. Featuring Angela Rothermel and guest.
                        Produced by Michael T. Starks. Editing Services by Brian Torres, 
                        Irlend Productions Independent, LLC. All Images and Footage used with Permission & Licensing, 
                        Provided by Adobe Stock and Pixabay.com. "Say a Prayer for the Living" Music, Lyrics & Performed 
                        by Michael T. Starks. Special Thanks to Karilyn T. Starks. Ionogen Media, LLC Copyright 2020. 
                        All Rights Reserved.</p>
                    
                        
                        

            
            </div>

        </Layout>
        

    )


}

export default Episode