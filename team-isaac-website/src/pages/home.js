import * as React from "react"
import * as Style from "../styles/style"
var sal = require('sal.js')
// markup
const IndexPage = () => {
  return (
    <main style={Style.pageStyles}>
      <title>Team Isaac Website</title>
      <h1 style={Style.headingStyles}>
        Welcome to
        <br />
        <span style={Style.headingAccentStyles}>Team Isaac!</span>
      </h1>
      <p style={Style.paragraphStyles} data-sal="fade">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta et ante ac cursus. Praesent tincidunt urna ac mauris euismod aliquet. Etiam eget aliquet magna. Ut nec sem sit amet turpis laoreet lacinia. Etiam scelerisque velit eu mauris efficitur bibendum. Nam consequat metus sollicitudin justo tristique, a fringilla ex molestie. Proin venenatis, purus et vehicula commodo, ex lectus hendrerit ex, vitae pulvinar dui neque ac neque. Vestibulum bibendum ante neque, nec porttitor augue semper sit amet. Nunc quis auctor libero, quis elementum ex. Sed gravida fermentum massa, et tincidunt libero accumsan ut. Maecenas rutrum sapien ex, ac elementum dolor tempor nec.
      </p>

    </main>
  )
}

export default IndexPage
