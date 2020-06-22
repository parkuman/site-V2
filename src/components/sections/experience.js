import React from "react";
import styled from "styled-components";
import theme from "@styles/theme";

const StyledExperience = styled.section`
    padding: 100px 0;
`;

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
    font-size: 4rem;
    margin: 0;
    margin-bottom: 4rem;
    padding: 0;
    font-weight: 500;
    font-style: normal;
    /* text-align: center; */

    &:before {
        content: "03. ";
        font-family: ${theme.fonts.IBMPlexMono};
        font-size: 1.5rem;
        color: var(--accent-color);
    }
`;

const StyledList = styled.ul`
    /* list-style-type: none; */
    margin: 0;
    padding: 0;
    display: flex;

    flex-direction: column;
    /* flex-wrap: wrap; */
    /* justify-content: space-evenly; */

    & li {
        padding: 0 60px;

        & hr {
            margin: 70px 0;
        }
    }
`;

const StyledJob = styled.div`
    margin-bottom: 20px;

    & h2 {
        font-size: 2rem;
        margin: 0 0 1.2rem 0;
        color: var(--text-color-primary);
        font-family: ${theme.fonts.IBMPlexSans};
        font-weight: normal;
    }

    & h3 {
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        font-weight: normal;
        color: var(--accent-color);
        font-family: ${theme.fonts.IBMPlexMono};
    }

    & h4 {
        font-size: 1.2rem;
        margin: 0;
        font-weight: normal;
        color: var(--text-color-secondary);
        font-family: ${theme.fonts.IBMPlexMono};
    }

    & p {
        font-size: 1.1rem;

        font-weight: normal;
        color: var(--text-color-secondary);

        & a {
            color: var(--accent-color);
            transition: ${theme.transition};

            &:hover {
                color: var(--text-color-primary);
            }
        }
    }
`;

const Job = ({ node, index }) => {
    const { frontmatter, html } = node;

    return (
        <li>
            <StyledJob>
                <h2>{frontmatter.title}</h2>
                <h3>{frontmatter.company}</h3>
                <h4>
                    {frontmatter.startDate} -{" "}
                    {frontmatter.endDate ? frontmatter.endDate : "Present"}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </StyledJob>
            <hr></hr>
        </li>
    );
};

const Experience = ({ data }) => {
    return (
        <StyledExperience id="experience">
            <StyledHeader>Experience</StyledHeader>
            <StyledList>
                {data.slice(0, 4).map((data, i) => (
                    <Job node={data.node} key={i} index={i} />
                ))}
            </StyledList>
        </StyledExperience>
    );
};

export default Experience;
