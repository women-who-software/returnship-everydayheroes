import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () =>{
    return (
        <footer className={footerStyles.footer}>  
            <p> Made with ♥︎ by the <a href= "https://www.womenwhocode.com/boulder-denver/about">WWCode Boulder/Denver</a> Career Returnship Podcast Team © 2020 </p>
        </footer>
    )
}

export default Footer