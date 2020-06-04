import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import config from "../config";
import DarkToggle from "@components/DarkToggle";
import Face from "@images/face.png";

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

    & img {
        height: 50px;
    }
`;

const StyledNavItems = styled.ul`
    list-style: none;
    & li {
        display: inline;
        padding: 0 10px;
    }
    
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
