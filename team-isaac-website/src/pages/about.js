import * as React from "react"
import * as Style from "../data/style"
import Layout from "../components/Layout"

const About = () => {
    return (
        <Layout>
            <main style={Style.pageStyles}>
                <h1 style={Style.headingStyles}>About 
                <span style={Style.headingAccentStyles}>&nbsp;us</span>
                </h1>
            </main>
        </Layout>
    )
}

export default About