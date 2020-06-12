import React, { useState, useEffect } from "react";
import styled from "styled-components";

import theme from "@styles/theme";

const StyledHero = styled.section`
    padding: 100px 50px;
`;

const StyledGreeting = styled.p`
    font-family: ${theme.fonts.IBMPlexMono};
    color: var(--accent-color);
    margin: 0;
    padding: 0;
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

const StyledTool = styled.span`
    margin-left: 20px;
    display: inline-block;
    transition: 3s;
`;

const Tool = ({ children }) => {
    return <StyledTool style>{children}</StyledTool>;
};

const Hero = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const [tool, setTool] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const interval = setInterval(() => {
            setTool((tool) => (tool + 1) % frontmatter.tools.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {});

    return (
        <StyledHero>
            <StyledGreeting>{frontmatter.greeting}</StyledGreeting>
            <StyledName>{frontmatter.name}</StyledName>
            <StyledSubtitle>
                {frontmatter.subtitle}
                <Tool>{frontmatter.tools[tool]}</Tool>
            </StyledSubtitle>
            <StyledInfo dangerouslySetInnerHTML={{ __html: html }}></StyledInfo>
        </StyledHero>
    );
};
export default Hero;
