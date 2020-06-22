import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import theme from "@styles/theme";

import EarthIcon from "@components/icons/earth";
import GithubIcon from "@components/icons/github";
import YoutubeIcon from "@components/icons/youtube";

const StyledProjects = styled.section`
    padding: 100px 0;
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
        padding: 80px 0;
    }
`;

const StyledProject = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledImage = styled(Img)`
    position: relative;
    width: 40%;
    border-radius: 15px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
`;

const StyledProjectContent = styled.div`
    width: 80%;

    margin: 0 80px;

    & h2 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        font-weight: normal;
        color: var(--text-color-primary);
        font-family: ${theme.fonts.IBMPlexMono};
    }

    & p {
        font-size: 1.1rem;

        font-weight: normal;
        color: var(--text-color-secondary);
    }
`;

const StyledProjectLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    & li {
        display: inline;
    }
`;

const StyledProjectTechnologies = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.IBMPlexMono};

    color: var(--text-color-secondary);
    & li {
        display: inline-block;
        padding: 0 20px;

        &:before {
            content: "→ ";
            color: var(--accent-color);
        }
    }
`;

const StyledIcon = styled.a`
    padding: 0 10px;
    & svg {
        transition: ${theme.transition};
    }

    &:hover {
        & svg {
            fill: var(--accent-color);
            transform: translateY(-3px);
        }
    }
`;

const Project = ({ node, index }) => {
    const { frontmatter } = node;
    const headerPicFluid = frontmatter.headerPic.childImageSharp.fluid;
    return (
        <li>
            <StyledProject>
                {index % 2 === 0 ? (
                    <StyledImage fluid={headerPicFluid} />
                ) : null}
                <StyledProjectContent>
                    <StyledProjectLinks>
                        {frontmatter.links.map((link, i) => {
                            var icon = <EarthIcon size="40px" />;
                            if (link.includes("github"))
                                icon = <GithubIcon size="35px" />;
                            else if (link.includes("yout"))
                                icon = <YoutubeIcon size="40px" />;

                            return (
                                <li key={i}>
                                    <StyledIcon href={link}>{icon}</StyledIcon>
                                </li>
                            );
                        })}
                    </StyledProjectLinks>
                    <h2>{frontmatter.title}</h2>
                    <StyledProjectTechnologies>
                        {frontmatter.technologies.map((technology, i) => (
                            <li key={i}>{technology}</li>
                        ))}
                    </StyledProjectTechnologies>
                    <p>{frontmatter.description}</p>
                    <p>{frontmatter.date}</p>
                </StyledProjectContent>
                {index % 2 === 0 ? null : (
                    <StyledImage fluid={headerPicFluid} />
                )}
            </StyledProject>
        </li>
    );
};

const Projects = ({ data }) => {
    return (
        <StyledProjects id="projects">
            <StyledHeader>Projects</StyledHeader>
            <StyledList>
                {data.map((data, i) => (
                    <Project node={data.node} key={i} index={i} />
                ))}
            </StyledList>
        </StyledProjects>
    );
};

export default Projects;
