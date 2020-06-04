/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Nav from "@components/Nav";
import GlobalStyle from "@styles/GlobalStyle";

const StyledSection = styled.section`
    margin: 0 auto;
    max-width: 900px;
`;

const Space = styled.div`
    width: 100%;
    height: 70px;
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div id="root">
            <GlobalStyle />
            <Nav />
            <Space />
            <StyledSection>
                <main>{children}</main>
            </StyledSection>
            <footer>
                <a href="https://github.com/parkuman/site-V2">
                    © {new Date().getFullYear()}, Built with ❤ by Parker Rowe
                </a>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
