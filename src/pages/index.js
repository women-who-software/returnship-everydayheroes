import React from "react"
import Layout from "../components/layout"
import Landing from "../components/landing"
import StoryForm from "../components/form"


const IndexPage = () => {

  return (
    <div>
      
      <Layout>
        <div>
          <Landing />
        </div>

        <br ></br>

        <div>
          <StoryForm />
        </div>
        

      </Layout>
    </div>
  )
}

export default IndexPage
