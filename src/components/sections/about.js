import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import theme from "@styles/theme";

const StyledAbout = styled.section`
    padding: 100px 50px;
    height: 80vh;
`;

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
    font-size: 4rem;
    margin: 0;
    padding: 0;
    font-weight: 500;
    font-style: normal;

    &:before {
        content: "01. ";
        font-family: ${theme.fonts.IBMPlexMono};
        font-size: 1.5rem;
        color: var(--accent-color);
    }
`;

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledInfo = styled.div`
    color: var(--text-color-secondary);
    margin-top: 40px;
    width: 60%;
    font-size: 1.1rem;

    & a {
        color: var(--accent-color);
        &:hover {
            color: var(--text-color-primary);
        }
    }
`;

const StyledProfilePic = styled(Img)`
    /* position: relative; */
    width: 40%;
    max-width: 40vw;
    margin-left: 60px;
`;

const StyledSkills = styled.ul`
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: 40px;
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

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const profilePicFluid = frontmatter.profilePic.childImageSharp.fluid;

    return (
        <StyledAbout>
            <StyledHeader id="about">{frontmatter.title}</StyledHeader>
            <StyledContent>
                <StyledInfo>
                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                    <StyledSkills>
                        {frontmatter.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </StyledSkills>
                </StyledInfo>

                <StyledProfilePic fluid={profilePicFluid} />
            </StyledContent>
        </StyledAbout>
    );
};
export default About;
