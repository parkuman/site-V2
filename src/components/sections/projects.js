import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";

const StyledProjects = styled.section`
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
    text-align: center;

    &:before {
        content: "02. ";
        font-family: ${theme.fonts.IBMPlexMono};
        font-size: 1.5rem;
        color: var(--accent-color);
    }
`;

const Projects = () => {
    return(
        <StyledProjects>
            <StyledHeader>Projects</StyledHeader>
        </StyledProjects>
    );

};



export default Projects;
