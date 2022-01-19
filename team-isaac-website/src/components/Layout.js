import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <>
        <Navbar />
        <div className="app-wrapper">{children}</div>
        <Footer />
        </>
    )
}