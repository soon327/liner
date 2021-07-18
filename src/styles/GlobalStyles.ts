import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const ROOT_FONT_SIZE: number = 14;

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
      text-decoration:none;
      color:inherit;
      cursor: pointer;
    }
    *{
      box-sizing:border-box;
      margin: 0;
      padding:0;
    }

    html{
      font-size: ${ROOT_FONT_SIZE}px; 
      font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    }
    p{
      line-height: 21px;
      font-weight:300;

    }
    
`;

export default GlobalStyles;
