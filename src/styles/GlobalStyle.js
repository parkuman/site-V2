import theme from "@styles/theme"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
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
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: ${theme.colors.floralWhite};
    color: ${theme.colors.richBlack};
    
    &.dark-mode {
        background: ${theme.colors.queenBlue};
        color: ${theme.colors.aquaMarine};
    } 
    transition: ${theme.transition}
} 
`

export default GlobalStyle
