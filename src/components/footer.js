import React from 'react'
import { Link } from "gatsby"
import TwitterImg from "../images/twitter_white.png"
import FacebookImg from "../images/facebook_white.png"

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footerContainer}>  
            <div className={footerStyles.row}>
                <div className={footerStyles.left_foot, footerStyles.column}>© Everyday Heroes 2020</div>
                    <div className={footerStyles.center_foot, footerStyles.column}> Follow us 
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
                <div className={footerStyles.right_foot, footerStyles.column}>
                    <a href="mailto:cv19eh@gmail.com">Contact Us</a>
                </div>
            </div>
            <div className={footerStyles.created}>
                <a href="https://career-returnship.netlify.app/" target="_blank">Created by WWCode Boulder/Denver Career Returnship</a>
            </div>
        </footer>
    )
}

export default Footer
