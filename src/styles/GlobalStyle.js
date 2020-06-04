import theme from "@styles/theme";
import FontFaces from "@styles/fonts";
import { createGlobalStyle, styled } from "styled-components";

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
        background: ${theme.colors.darkBlue};
        color: ${theme.colors.candyPink};
    } 
    transition: ${theme.transition};
    
} 

a {
    text-decoration: none;
    color: inherit;
}

footer {
    font-family: ${theme.fonts.IBMPlexMono};
    text-align: center;
    
        text-shadow: none;
    background-image: none;
    
}
`;

export default GlobalStyle;
