import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as Styled from "../styles/style"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={Styled.pageStyles}>
        <title>Not found</title>
        <h1 style={Styled.headingStyles}>Page not found</h1>
        <p style={Styled.paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={Styled.codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
