import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 200vh;
    background: linear-gradient(to bottom,  ${(props) =>
		props.theme.colors.backgraund_light} 0%, ${(props) =>
	props.theme.colors.backgraund_dark} 100%);
    
  }
`;
