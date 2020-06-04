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


const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 900px;
  color: var(--textNormal);
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
    <>
      <StyledDiv>
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
            <Link style={{ display: "inline-block" }} to="/about/">
              About
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with ❤ by Parker Rowe
        </footer>
      </StyledDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
