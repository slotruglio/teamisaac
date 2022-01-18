import * as React from "react"
import Layout from "../components/Layout"
import * as Style from "../data/style"

const Contact = () => {
    return (
        <Layout>
            <main style={Style.pageStyles}>
                <h1 style={Style.headingStyles}>Contact 
                <span style={Style.headingAccentStyles}>&nbsp;us</span>
                </h1>
            </main>
        </Layout>
    )
}

export default Contact