/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

import Nav from "@components/Nav";
import Left from "@components/Left";
import Right from "@components/Right";
import Footer from "@components/Footer";

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
            <Left />
            <Right />
            <Space />
            <StyledSection>
                <main>{children}</main>
            </StyledSection>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
