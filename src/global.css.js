import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
    }

    body {
        font-family: 'Karla', sans-serif;
    }

    h1,h2,h3,h4 {
        font-family: 'DM Serif Display', serif;
    }
`;

export default GlobalStyles;
