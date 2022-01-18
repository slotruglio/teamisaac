import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <StaticImage
        src="../images/icon.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={30}
        height={30}
      />
    </LogoWrap>
  );
}

export default Logo