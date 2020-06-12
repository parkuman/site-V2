import React from "react";
import styled from "styled-components";

export const OutlineButton = ({ text, href }) => {
    const StyledButton = styled.button`
        border: 1px solid;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 10px 30px;
        font-size: 1rem;
        cursor: pointer;

    `;

    return (
        <a href={href}>
            <StyledButton>{text}</StyledButton>
        </a>
    );
};
