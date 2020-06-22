import React from "react";
import styled from "styled-components";

import config from "../config";
import theme from "@styles/theme";

const StyledFooter = styled.footer`
    font-family: ${theme.fonts.IBMPlexMono};
    text-align: center;
    text-shadow: none;
    background-image: none;
    margin-bottom: 30px;
    & a {
        color: var(--text-color-secondary);

        &:hover {
            color: var(--accent-color);
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <a href={config.github + "/site-V2"}>
            © {new Date().getFullYear()}, Built with ❤ by {config.name}
        </a>
    </StyledFooter>
);

export default Footer;
