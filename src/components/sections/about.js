import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

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
    width: 60%;
    font-size: 1.1rem;
`;

const StyledProfilePic = styled(Img)`
    position: relative;
    width: 40%;
    max-width: 400px;
    margin-left: 60px;
`;

const StyledSkills = styled.ul`
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: ${theme.colors.lightGrey};
    & li {
        display: inline-block;
        padding: 0 20px;

        &:before {
            content: "→ ";
        }
    }
`;

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    let profilePicFluid = frontmatter.profilePic.childImageSharp.fluid;

    return (
        <StyledAbout>
            <StyledHeader>{frontmatter.title}</StyledHeader>
            <StyledContent>
                <StyledInfo
                    dangerouslySetInnerHTML={{ __html: html }}
                ></StyledInfo>

                <StyledProfilePic fluid={profilePicFluid} />
            </StyledContent>
            <StyledSkills>
                {frontmatter.skills.map((skill) => (
                    <li>{skill}</li>
                ))}
            </StyledSkills>
        </StyledAbout>
    );
};
export default About;
