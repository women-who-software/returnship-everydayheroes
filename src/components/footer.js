import React from 'react'
import TwitterImg from "../images/footer_icons/twitter_white_v1.png"
import FacebookImg from "../images/footer_icons/fb_white.png"
import ApplePodcastImg from "../images/footer_icons/ap_white.png"
import BuzzsproutImg from "../images/footer_icons/bz_white.png"
import GooglePodcastImg from "../images/footer_icons/gp_white.png"
import RSSImg from "../images/footer_icons/rss_white.png"
import SpotifyImg from "../images/footer_icons/spotify_white.png"
import VimeoImg from "../images/footer_icons/vimeo_white.png"

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footerContainer}> 
            <div className={footerStyles.row}>

                <a href="https://www.facebook.com/groups/covid19everydayheroes" >
                <img className={footerStyles.img_sm_logo}
                    src={FacebookImg}
                    alt="facebook link"/>
                </a>

                <a href="https://www.twitter.com" >
                <img className={footerStyles.img_sm_logo}
                    src={TwitterImg}
                    alt="twitter link"/>
                </a>

                <a href="https://feeds.buzzsprout.com/1186835.rss" >
                <img className={footerStyles.img_sm_logo}
                    src={RSSImg}
                    alt="RSS link"/>
                </a>

                <a href="https://open.spotify.com/show/2Peey8851W9EuWQpdGPatc" >
                <img className={footerStyles.img_sm_logo}
                    src={SpotifyImg}
                    alt="spotify link"/>
                </a>

                <a href="https://www.buzzsprout.com/1186835" >
                <img className={footerStyles.img_sm_logo}
                    src={BuzzsproutImg}
                    alt="buzzsprout link"/>
                </a>

                <a href="https://podcasts.apple.com/us/podcast/everyday-heroes-a-covid-19-podcast/id1524576934?uo=4" >
                <img className={footerStyles.img_sm_logo}
                    src={ApplePodcastImg}
                    alt="applepodcast link"/>
                </a>

                <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMTg2ODM1LnJzcw==" >
                <img className={footerStyles.img_sm_logo}
                    src={GooglePodcastImg}
                    alt="googlepodcast link"/>
                </a>

                <a href="https://vimeo.com/channels/cv19everydayheroes/page:1" >
                <img className={footerStyles.img_sm_logo}
                    src={VimeoImg}
                    alt="vimeo link"/>
                </a>
            
            
        </div> 

            
                <div className={footerStyles.row}> <a href="mailto:cv19eh@gmail.com">Contact Us</a> </div>
                <div className={footerStyles.row} >© Everyday Heroes 2021</div>
                <div className={footerStyles.row}>
                    <div className={footerStyles.createdBy}>
                    Created by WWCode Boulder/Denver <a href="https://career-returnship.netlify.app/" > Career Returnship</a>
                    </div>
                </div>

            
            
        </footer>
    )
}

export default Footer
