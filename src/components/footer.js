import React from 'react'
import TwitterImg from "../images/twitter_white.png"
import FacebookImg from "../images/facebook_white.png"

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footerContainer}>  
            <div className={footerStyles.row}>
                <div className={footerStyles.left}>© Everyday Heroes 2020</div>
                    <div className={footerStyles.center_foot}> Follow us 
                    <a href="https://www.twitter.com" >
                    <img className={footerStyles.img_sm_logo}
                        src={TwitterImg}
                        alt="twitter"/>
                    </a>

                    <a href="https://www.facebook.com/groups/covid19everydayheroes" >
                    <img className={footerStyles.img_sm_logo}
                        src={FacebookImg}
                        alt="facebook"/>
                    </a>
                    
                    </div>
                <div className={footerStyles.right}>
                    <a href="mailto:cv19eh@gmail.com">Contact Us</a>
                </div>
            </div>
            <div className={footerStyles.created}>
                <a href="https://career-returnship.netlify.app/">Created by WWCode Boulder/Denver Career Returnship</a>
            </div>
        </footer>
    )
}

export default Footer
