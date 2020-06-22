import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import config from "../config";
import DarkToggle from "@components/DarkToggle";
import Logo from "@images/logo.png";
import theme from "@styles/theme";
import { OutlineButton } from "@components/Buttons";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 40px;
    height: 70px;
    z-index: 100000000;
    background: var(--bg-color);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    font-family: ${theme.fonts.IBMPlexMono};
`;

const StyledNavItems = styled.ul`
    list-style: none;
    & li {
        display: inline;
        padding: 0 10px;
        &:last-of-type {
            margin-right: 10px;
        }
        /* &:nth-of-type(1):hover ~ .underbar {
            left: 75px;
            width: 45px;
            background: rgba(100, 100, 200, 1);
        }
        &:nth-of-type(2):hover ~ .underbar {
            left: 140px;
            width: 90px;
            background: #ff8585;
        }
        &:nth-of-type(3):hover ~ .underbar {
            left: 245px;
            width: 40px;
            background: #ffe071;
        }
        &:nth-of-type(4):hover ~ .underbar {
            left: 300px;
            width: 65px;
            background: #41a5ee;
        } */
    }

    /* & .underbar {
        width: 0;
        height: 5px;
        position: relative;
        left: 75px;
        background: rgba(100, 100, 200, 0);
        -webkit-transition: 0.5s ease;
    } */
`;

const StyledNumber = styled.span`
    color: var(--accent-color);
`;

const StyledLogo = styled.img`
    height: 70px;
    filter: var(--logo-color);
`;

const NavItems = () => {
    return (
        <StyledNavItems>
            <DarkToggle />
            {config.navLinks.map((item, i) => (
                <li key={i}>
                    <StyledNumber>0{i + 1}. </StyledNumber>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            ))}
            <OutlineButton href="resume.pdf">Resume</OutlineButton>
            <div className="underbar"></div>
        </StyledNavItems>
    );
};

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">
                <StyledLogo src={Logo} alt="logo" />
            </Link>
            <NavItems />
        </StyledNav>
    );
};

export default Nav;
