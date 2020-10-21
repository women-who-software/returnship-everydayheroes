import React from "react"
import  {graphql}  from "gatsby"
import Layout from '../components/layout'
import Video from "../components/video"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import epiStyles from './episode.module.scss'
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
                    relativePath
                    absolutePath
                    extension
                  }
                guestBio
                episodeNumber
                vim_ep_num
                buz_ep_url
                shownotes

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
    //let episodeNum = props.data.markdownRemark.frontmatter.episodeNumber;
    //let guestPhotoTitle = props.data.markdownRemark.frontmatter.guestPhoto;
    let imagePath = props.data.markdownRemark.frontmatter.guestPhoto.relativePath;
    let imageURL = `../${imagePath}`
    

    //console.log(imagePath);
    //console.log(episodeNum);
    //console.log(guestPhotoTitle);
    //console.log(imageURL);
  


    return(
        
        <Layout>
            
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>

            <div className={epiStyles.flex_body_container}>

                

                        <div className={epiStyles.leftContainer}>
                            <Video videoSrcURL= {fullVideoURLBuilder}
                                    title={props.data.markdownRemark.frontmatter.title} />
                        </div>
                        

                        <div className={epiStyles.rightContainer}> 
                                <div className={epiStyles.AudioPlayer}><AudioPlayer 
                                autoPlay={false}
                                src={props.data.markdownRemark.frontmatter.buz_ep_url}
                                onPlay={e => console.log("onPlay")}
                                showJumpControls={false}
                                customAdditionalControls={[]}
                                
                            /></div>

                        </div>

                    <div className={epiStyles.row}>
                        <h3> Date Published: {props.data.markdownRemark.frontmatter.date} </h3>
                    </div>
                    <div className={epiStyles.row}>
                        <h4 > Featured guest: {props.data.markdownRemark.frontmatter.guestName}</h4>
                        
                    </div>
                    <div className={epiStyles.row}>

                        <div className={epiStyles.leftContainer}>
                        <img className={epiStyles.guestImage}
                        // Trying to pull in each picture of the guest from each of the relative path from Episodes folder 
                        // but its not working
                        src={imageURL}
                        alt="Image of the featured guest" ></img> 
                    
                        </div>
                        <div className={epiStyles.rightContainer}> 
                        <p >{props.data.markdownRemark.frontmatter.guestBio}</p>


                        </div>
                    </div>
                    <div className={epiStyles.row}>
                            
                            <p>{props.data.markdownRemark.frontmatter.shownotes}</p>

                    </div>

                    <div className={epiStyles.row}>
                    
                        <h3 >  Transcript: </h3>        
                    
                    </div>
                        <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>


                        <div className={epiStyles.row}>
                        
                        <p>Credits
                        EVERYDAY HEROES: A COVID-19 Podcast. Featuring Angela Rothermel and guest.
                        Produced by Michael T. Starks. Editing Services by Brian Torres, 
                        Irlend Productions Independent, LLC. All Images and Footage used with Permission & Licensing, 
                        Provided by Adobe Stock and Pixabay.com. "Say a Prayer for the Living" Music, Lyrics & Performed 
                        by Michael T. Starks. Special Thanks to Karilyn T. Starks. Ionogen Media, LLC Copyright 2020. 
                        All Rights Reserved.</p>
                    
                        </div>
                        

            
            </div>

        </Layout>
        

    )


}

export default Episode