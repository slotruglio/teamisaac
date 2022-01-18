import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 150px;

  @media (max-width: 768px) {
    flex: 0 1 120px;
  }
`
const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <StaticImage
        src="../images/150x50.png"
        alt="Logo"
        placeholder="blurred"
        layout="constrained"
        transformOptions={`fit: "contain"`}
        width={150}
        height={50}
      />
    </LogoWrap>
  );
}

export default Logo