import React from "react"
//import {Link} from 'gatsby'

import Layout from "../components/layout"

// To implement a link to a page do :  <Link to="/contact"> Contact us.</Link>

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1> Celebrating COVID-19 Heroes</h1>

        <p>
          {" "}
          Hello! We're creating a podcast that features Everyday Heroes who are
          willing to tell their stories and to share the impact they've made
          during the COVID-19 pandemic. Fill out this form if you have a story
          you would like to share.{" "}
        </p>

        <form
          name="share-your-story"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="share-your-story" />

          <div className="field half first">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Jane Smith" />
          </div>

          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="janesmith@email.com"
            />
          </div>

          <div className="field location">
            <label htmlFor="email">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder=" Denver, CO"
            />
          </div>

          <div className="field phone">
            <label htmlFor="email">Phone Number </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="123 456 5555"
            />
          </div>

          <div>
            <label htmlFor="zoom-option ">
              Are you willing to share your story over zoom?
            </label>
            <select name="zoom-option" id="zoom-option">
              <option value="selected" selected></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Undecided">Undecided</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="story">Share your story...</label>
            <textarea
              name="story"
              id="story"
              rows="6"
              placeholder="My story..."
            />
          </div>

          <div className="actions">
            <input type="submit" value="Submit" className="special" />
          </div>
        </form>
      </Layout>
    </div>
  )
}

export default IndexPage
