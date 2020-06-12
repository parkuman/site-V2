import React from "react";
import styled from "styled-components";

import Layout from "@components/Layout";
import SEO from "@components/SEO";

import Hero from "@components/sections/hero";

const StyledHeader = styled.h1`
    color: var(--text-color-primary);
`;

const Home = ({ data }) => (
    <Layout>
        <SEO title="" />
        <Hero data={data.hero.edges} />
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
        hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
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
    }
`;
