import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const SuccessPage = () => {
    return (
        <div>
            <Layout>
                <h1> Thank you </h1>

                <h2>We'll get back to you soon. </h2>
                <p> Click <Link to="/" > here</Link> to submit another story. </p>
                
            </Layout>

        </div>
    )
}

export default SuccessPage 