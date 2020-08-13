import React from 'react'
import { Link } from "gatsby"
import TwitterImg from "../images/twitter.png"
import FacebookImg from "../images/facebook.png"

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footerContainer}>  
            <div className={footerStyles.row}>
            <div className={footerStyles.left, footerStyles.column}>© Everyday Heroes</div>
            <div className={footerStyles.center, footerStyles.column}>Connect with us on social 
            <Link to="https://www.twitter.com" target="_blank">
                <img 
                    src={TwitterImg}
                    alt="twitter"
                />
            </Link>

            <Link to="https://www.facebook.com/groups/covid19everydayheroes" target="_blank">
                <img 
                    src={FacebookImg}
                    alt="facebook"
                />
            </Link>
           
            </div>
            <div className={footerStyles.right, footerStyles.column}>
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
