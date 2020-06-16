import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";

const StyledAbout = styled.section`
    padding: 100px 50px;
    height: 100vh;
`;

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
    font-size: 4rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-style: normal;
`;

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledInfo = styled.div`
    color: ${theme.colors.lightGrey};
    margin-top: 40px;
    width: 70%;
    font-size: 1.1rem;
`;

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;

    return (
        <StyledAbout>
            <StyledHeader>{frontmatter.title}</StyledHeader>
            <StyledContent>
            <StyledInfo dangerouslySetInnerHTML={{ __html: html }}></StyledInfo>
            <img src="fepl"></img>
            </StyledContent>
        </StyledAbout>
    );
};
export default About;
