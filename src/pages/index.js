import React from "react";
import { graphql } from "gatsby";

import Layout from ".././components/Layout";
import SEO from ".././components/SEO";

import Hero from "@components/sections/hero";
import About from "@components/sections/about";
import Projects from "@components/sections/projects";
import Experience from "@components/sections/experience";
import Contact from "@components/sections/contact";

const Home = ({ data }) => (
    <Layout data={data}>
        <SEO title="" />

        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Projects data={data.projects.edges} />
        <Experience data={data.experience.edges} />
        <Contact data={data.contact.edges} />
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
            filter: { fileAbsolutePath: { regex: "/projects/" } }
            sort: { order: ASC, fields: frontmatter___order }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        technologies
                        headerPic {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        description
                        links
                    }
                    html
                }
            }
        }
        experience: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/experience/" } }
            sort: { order: ASC, fields: frontmatter___order }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        company
                        startDate
                        endDate
                        order
                    }
                    html
                }
            }
        }
        contact: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/contact/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    html
                }
            }
        }

        bgImage: file(relativePath: { eq: "bg.png" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
