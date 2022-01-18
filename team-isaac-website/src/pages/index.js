import * as React from "react"
import IndexPage from "./home"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"

const App = () => {
    return (
        <Layout>
            <Navbar />
            <IndexPage />
        </Layout>
    )
}

export default App