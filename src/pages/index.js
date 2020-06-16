import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import SEO from "@components/SEO";

import Hero from "@components/sections/hero";
import About from "@components/sections/about";

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
`;

const Home = ({ data }) => (
    <Layout>
        <SEO title="" />
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
        <StyledHeader>Home</StyledHeader>
    </Layout>
);

export default Home;

export const pageQuery = graphql`
    {
        hero: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/hero/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        greeting
                        name
                        subtitle
                        tools
                    }
                    html
                }
            }
        }

        about: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/about/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        pic
                        skills
                    }
                    html
                }
            }
        }
    }
`;
