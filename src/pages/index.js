import React from "react";
import { graphql } from "gatsby";

import Layout from "@components/Layout";
import SEO from "@components/SEO";

import Hero from "@components/sections/hero";
import About from "@components/sections/about";
import Projects from "@components/sections/projects";

const Home = ({ data }) => (
    <Layout>
        <SEO title="" />
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Projects data={data.projects.edges} />
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
                        profilePic {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        skills
                    }
                    html
                }
            }
        }
        projects: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/projects/" }
            }
            
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    }
`;
