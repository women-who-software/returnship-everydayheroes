import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'
import Video from "../components/video"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import epiStyles from './episode.module.scss'

export const query= graphql`
        query ($slug:String!){
            markdownRemark(
            fields: {slug:{eq: $slug}}){
            frontmatter{
                title
                date (formatString: "MMMM DD, YYYY")
                videoSourceURL
                authors
            }
            html
        }
    }
`


const Episode = (props) => {

    return(
        
        <Layout>
            
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>

            <div className={epiStyles.flex_body_container}>

                

                        <div className={epiStyles.leftContainer}>
                            <Video videoSrcURL={props.data.markdownRemark.frontmatter.videoSourceURL}
                                    title={props.data.markdownRemark.frontmatter.title} />
                        </div>
                        

                        <div className={epiStyles.rightContainer}> 
                                <AudioPlayer 
                                autoPlay
                                src="http://example.com/audio.mp3"
                                onPlay={e => console.log("onPlay")}
                                showJumpControls={false}
                                layout="horizontal-reverse" 
                            />

                        </div>

                    <div className={epiStyles.row}>
                        <h3> Date Published: {props.data.markdownRemark.frontmatter.date} </h3>
                    </div>
                    <div className={epiStyles.row}>
                        <h4 > Featured host & guest: {props.data.markdownRemark.frontmatter.authors}</h4>
                    </div>
                        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>


                        

            
            </div>

        </Layout>
        
        


    )

}

export default Episode