import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    /* background: linear-gradient(to bottom, ${props => props.theme.colors.backgraund_light} , ${props => props.theme.colors.backgraund_dark}); */
    background: linear-gradient(to bottom, #b3cde0, #6497b1, #005b96);
    width: 100%;
    height: 300vh;
    display: flex;
    justify-content: center;
    
  }
`;