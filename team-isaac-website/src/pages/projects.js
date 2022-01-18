import * as React from "react"
import Layout from "../components/Layout"
import * as Style from "../data/style"

const Projects = () => {
    return (
        <Layout>
            <main style={Style.pageStyles}>
                <h1 style={Style.headingStyles}>Our
                <span style={Style.headingAccentStyles}>&nbsp;Projects</span>
                </h1>
            </main>
        </Layout>
    )
}

export default Projects