import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";
import config from "../config";
import GithubIcon from "@components/icons/github";
import LinkedIn from "@images/social/linkedin.svg";
import Instagram from "@images/social/instagram.svg";

const StyledIcon = styled.svg`
    &:hover {
        fill: var(--accent-color);
    }
`;

const socials = config.socialMedia.map((social) => {
    // var icon;

    // switch (social.name) {
    //     case "GitHub":
    //         icon = GithubIcon;
    //         break;
    //     case "Linkedin":
    //         icon = LinkedIn;
    //         break;
    //     case "Instagram":
    //         icon = Instagram;
    //         break;
    //     default:
    //         icon = null;
    //         break;
    // }

    return (
        <a href={social.url}>
            <GithubIcon />
        </a>
    );
});

const StyledLeft = styled.div`
    padding: 0 30px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    left: 0;

    & a {
        padding: 10px 0;
        color: ${theme.colors.lightGrey};
        font-family: ${theme.fonts.IBMPlexMono};
    }
`;

const Line = styled.div`
    height: 100px;
    width: 2px;
    margin-top: 20px;
    background: ${theme.colors.lightGrey};
`;

const Left = () => {
    return (
        <StyledLeft>
            {socials}
            <Line />
        </StyledLeft>
    );
};

export default Left;
