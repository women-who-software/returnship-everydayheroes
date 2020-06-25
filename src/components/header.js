import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "overlay_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <header className={headerStyles.headerContainer}>

        <div className={headerStyles.row}>
        <div className={headerStyles.leftContainer}>
          <Link className={headerStyles.title} to="/">
            <Img
              loading="eager"
              fluid={data.file.childImageSharp.fluid}
              alt=" Everyday Heroes, a covid19 Podcast with a Mask Icon"
            />
          </Link>
        </div>
        <div className={headerStyles.rightContainer}>
          <nav>
            <ul className={headerStyles.nav_list}>
              <li>
                {" "}
                <Link
                  className={headerStyles.nav_item}
                  activeClassName={headerStyles.active_nav_item}
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={headerStyles.nav_item}
                  activeClassName={headerStyles.active_nav_item}
                  to="/about"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={headerStyles.nav_item}
                  activeClassName={headerStyles.active_nav_item}
                  to="/podcast"
                >
                  {" "}
                  Podcast{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={headerStyles.nav_item}
                  activeClassName={headerStyles.active_nav_item}
                  to="/contact"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
