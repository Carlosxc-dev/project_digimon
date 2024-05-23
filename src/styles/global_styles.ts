import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${props => props.theme.colors.backgraund};
    font-family: ${props => props.theme.fonts.fontTitle};
    color: ${props => props.theme.colors.txt};
    
  }
`;