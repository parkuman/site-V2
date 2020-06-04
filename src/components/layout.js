/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import DarkToggle from "@components/DarkToggle"
import GlobalStyle from "@styles/GlobalStyle"

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 900px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="root">
      <GlobalStyle />

      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <h3 style={{ display: "inline-block" }}>Parker Rowe</h3>
        </Link>

        <div>
          <DarkToggle></DarkToggle>
          <Link style={{ display: "inline-block" }} to="/about/">
            About
          </Link>
        </div>
      </header>
      <StyledSection>
        <main>{children}</main>
      </StyledSection>
      <footer>© {new Date().getFullYear()}, Built with ❤ by Parker Rowe</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
