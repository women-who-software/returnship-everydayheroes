import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'
import Video from "../components/video"

export const query= graphql`
        query ($slug:String!){
            markdownRemark(
            fields: {slug:{eq: $slug}}){
            frontmatter{
                title
                videoTitle
                date (formatString: "MMMM DD, YYYY")
                videoSourceURL
                authors
                text
            }
            html
        }
    }
`


const Episode = (props) => {

    return(
        <Layout>
        
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <Video videoSrcURL={props.data.markdownRemark.frontmatter.videoSourceURL}
                    videoTitle={props.data.markdownRemark.frontmatter.videoTitle} />
            <h4> {props.data.markdownRemark.frontmatter.date} </h4>
            <h5> {props.data.markdownRemark.frontmatter.authors}</h5>
            <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
            
            

        
        </Layout>


    )

}

export default Episode