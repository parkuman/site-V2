import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextLoop from "react-text-loop";

import theme from "@styles/theme";

const StyledHero = styled.section`
    padding: 100px 50px;
    height: 100vh;
`;

const StyledGreeting = styled.p`
    font-family: ${theme.fonts.IBMPlexMono};
    color: var(--accent-color);
    margin: 0;
    padding: 0;
    padding-top: 15vh;
    font-size: 1.2rem;
`;

const StyledName = styled.h1`
    color: var(--text-color-primary);
    font-size: 6rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-style: normal;
`;

const StyledSubtitle = styled.h2`
    color: ${theme.colors.lightGrey};
    font-size: 4rem;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    font-weight: 500;
    font-style: normal;
`;

const StyledInfo = styled.div`
    color: ${theme.colors.lightGrey};
    margin-top: 40px;
    width: 70%;
    font-size: 1.1rem;
`;

const ScrollText = styled.span`
    margin-left: 2rem;
    position: relative;
    /* to scooch it up a bit */
    top: -0.5rem;
`;

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;

    return (
        <StyledHero>
            <StyledGreeting>{frontmatter.greeting}</StyledGreeting>
            <StyledName>{frontmatter.name}</StyledName>
            <StyledSubtitle>
                {frontmatter.subtitle}

                <TextLoop>
                    {frontmatter.tools.map((tool) => (
                        <ScrollText>{tool}</ScrollText>
                    ))}
                </TextLoop>
            </StyledSubtitle>
            <StyledInfo dangerouslySetInnerHTML={{ __html: html }}></StyledInfo>
        </StyledHero>
    );
};
export default Hero;
