import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        primaryDarkViolet: 'hsl(256, 26%, 20%)',
        primaryGrayishBlue: 'hsl(216, 30%, 68%)',
        neutralVeryDarkViolet: 'hsl(270, 9%, 17%)',
        neutralDarkGrayishViolet: 'hsl(273, 4%, 51%)',
        neutralVeryLightGray: 'hsl(0, 0%, 98%)',
    },
    breakpoints: {
        mobileDevices: 'max-width: 480px',
        tabletDevices: 'min-width: 481px',
        smallScreenDevices: 'min-width: 769px',
        largeSecreenDevices: 'min-width: 1025px',
        extraLargeScreenDevices: 'min-width: 1201px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
