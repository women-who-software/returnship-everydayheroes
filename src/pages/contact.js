import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/contactform'

const ContactPage = () => {
    return (
      <div id="contactformid">
      {/*
        <div>
            <Layout>
              <h2> Contact </h2>
              <p> Reach us via email at cv19eh@gmail.com </p>
              <p> Join our <a href="https://www.facebook.com/groups/covid19everydayheroes" >facebook group</a>!</p>
            </Layout>
        </div>
        */}
        <div>
          <Layout>
            <ContactForm />
          </Layout>
        </div>
      </div>
    );
}

export default ContactPage
