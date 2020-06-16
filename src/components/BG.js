import React from "react";
import styled from "styled-components";

import theme from "@styles/theme";

const StyledBG = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    z-index: -1000;
`;

const RedCircle = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    left: 90vw;
    top: 85px;

    background: ${theme.colors.red};
    opacity: 20%;
`;

const BlueCircle = styled.div`
    position: relative;
    width: 600px;
    height: 600px;
    border-radius: 600px;
    top: 400px;
    left: -300px;
    background: ${theme.colors.blue};
    opacity: 20%;
`;

const BG = () => {
    return (
        <StyledBG>
            <RedCircle />
            <BlueCircle />
        </StyledBG>
    );
};

export default BG;
