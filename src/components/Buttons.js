import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";

export const OutlineButton = ({ text, href }) => {
    const StyledButton = styled.button`
        border: 1px solid;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 10px 30px;
        font-size: 1rem;

        & a {
            color: var(--accent-color);
        }
    `;

    return (
        <StyledButton>
            <a href={href}>{text}</a>
        </StyledButton>
    );
};
