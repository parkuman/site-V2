import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import config from "../config";
import DarkToggle from "@components/DarkToggle";
import Face from "@images/face.png";
import theme from "@styles/theme";

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
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    font-family: ${theme.fonts.IBMPlexMono};

    & img {
        height: 50px;
    }
`;

const StyledNavItems = styled.ul`
    list-style: none;
    & li {
        display: inline;
        padding: 0 10px;
        &:nth-of-type(1):hover ~ .underbar {
            left: 75px;
            width: 45px;
            background: rgba(100, 100, 200, 1);
        }
        &:nth-of-type(2):hover ~ .underbar {
            left: 140px;
            width: 90px;
            background: #FF8585;
        }
        &:nth-of-type(3):hover ~ .underbar {
            left: 245px;
            width: 40px;
            background: #FFE071;
        }
        &:nth-of-type(4):hover ~ .underbar {
            left: 300px;
            width: 65px;
            background: #41A5EE;
        }
        cursor: pointer;
    }

    & .underbar {
        width: 0;
        height: 5px;
        position: relative;
        left: 75px;
        background: rgba(100, 100, 200, 0);
        -webkit-transition: 0.5s ease;
    }
`;

const Underbar = styled.div`
    width: 0;
    height: 5px;
    background: rgba(100, 100, 200, 0);
    -webkit-transition: 0.5s ease;
`;

const NavItems = () => {
    return (
        <StyledNavItems>
            <DarkToggle />
            {config.navLinks.map((item) => (
                <li>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            ))}
            <div className="underbar"></div>
        </StyledNavItems>
    );
};

const Nav = () => {
    return (
        <StyledNav>
            <Link to="/">
                <img src={Face} alt="logo" />
            </Link>
            <NavItems />
        </StyledNav>
    );
};

export default Nav;
