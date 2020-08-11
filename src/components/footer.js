import React from 'react'
import { Link } from "gatsby"
import TwitterImg from "../images/twitter_white.png"
import FacebookImg from "../images/facebook_white.png"

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footerContainer}>  
            <div className={footerStyles.row}>
                <div className={footerStyles.left}>© Everyday Heroes 2020</div>
                    <div className={footerStyles.center_foot}> Follow us 
                    <Link to="https://www.twitter.com" target="_blank">
                    <img className={footerStyles.img_sm_logo}
                        src={TwitterImg}
                        alt="twitter"/>
                    </Link>

                    <Link to="https://www.facebook.com/groups/covid19everydayheroes" target="_blank">
                    <img className={footerStyles.img_sm_logo}
                        src={FacebookImg}
                        alt="facebook"/>
                    </Link>
                    
                    </div>
                <div className={footerStyles.right}>
                    <a href="mailto:cv19eh@gmail.com">Contact Us</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
