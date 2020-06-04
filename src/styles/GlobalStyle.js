import theme from "@styles/theme";
import FontFaces from "@styles/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${FontFaces};

html {
    box-sizing: border-box;
    width: 100%;
  }

*,
*:before,
*:after {
   box-sizing: inherit;
}
body {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    min-height: 100%;
    font-family: ${theme.fonts.IBMPlexSans};
    background: ${theme.colors.floralWhite};
    color: ${theme.colors.richBlack};
    &.dark-mode {
        background: ${theme.colors.queenBlue};
        color: ${theme.colors.aquaMarine};
    } 
    transition: ${theme.transition}
} 

footer {
    font-family: ${theme.fonts.IBMPlexMono};
}
`;

export default GlobalStyle;
