import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About me">
            <p>Hellow My name is Jang, I'm CEO to jack's fermentation room</p>
        </Layout>
    )
}

export const Head = () => <title>About me</title>
export default AboutPage