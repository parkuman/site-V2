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
import BackgroundImage from "gatsby-background-image";
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

const StyledBackgroundImage = styled(BackgroundImage)`
    width: 100%;

    width: 100%;
    background-position: top center;
    /* background-repeat: repeat-y; */
    background-size: contain;
    /* background-clip: padding-box;  */

`;

const Layout = ({ children, data }) => {
    return (
        <div id="root">
            <GlobalStyle />

            <StyledBackgroundImage fluid={data.bgImage.childImageSharp.fluid}>
                <Nav />
                <Left />
                <Right />

                <StyledSection>
                    <main>{children}</main>
                </StyledSection>
                <Footer />
            </StyledBackgroundImage>
        </div>
    );
};

export default Layout;
