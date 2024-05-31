import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        with: 100vw;]
        heigth: 100vh;
        background-color: #f0f0f0;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;