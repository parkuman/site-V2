/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";

import Nav from "@components/Nav";
import Left from "@components/Left";
import Right from "@components/Right";
import BG from "@components/BG";
import Footer from "@components/Footer";

import GlobalStyle from "@styles/GlobalStyle";
import media from "@styles/media";

const StyledSection = styled.section`
    margin: 0 auto;
    max-width: 80%;
    ${media.tablet`
        max-width: 90%;

    `}
`;

const Layout = ({ children }) => {
    return (
        <div id="root">
            <GlobalStyle />
            <Nav />
            <Left />
            <Right />

            <StyledSection>
                <main>{children}</main>
            </StyledSection>
            <Footer />
            {/* <BG></BG> */}
        </div>
    );
};

export default Layout;
