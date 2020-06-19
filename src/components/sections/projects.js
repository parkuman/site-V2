import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";

const StyledProjects = styled.section`
    padding: 100px 50px;
`;

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
    font-size: 4rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-style: normal;
    text-align: center;

    &:before {
        content: "02. ";
        font-family: ${theme.fonts.IBMPlexMono};
        font-size: 1.5rem;
        color: var(--accent-color);
    }
`;

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    & li {
        padding: 10px 0;
    }
`;

const Project = ({ node }) => {
    const { frontmatter } = node;

    return <h1>{frontmatter.title}</h1>;
};

const Projects = ({ data }) => {
    return (
        <StyledProjects id="projects">
            <StyledHeader>Projects</StyledHeader>
            <StyledList>
                {data.map((data, i) => (
                    <Project node={data.node} key={i} />
                ))}
            </StyledList>
        </StyledProjects>
    );
};

export default Projects;
