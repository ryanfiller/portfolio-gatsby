export const colors = {
    blue: '#3f7cac',
    orange: '#f89c7d',
    white: '#fcfaf6',
    black: '#1e2223',
}

require("typeface-raleway")
require("typeface-dosis")

export const fonts = {
    sansSerif: () => {
        return `
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
        `;
    },
    condensed: () => {
        return `
            font-family: 'Dosis', sans-serif;
            font-weight: 400;
        `;
    }
}

export const transition = '.2s';

export const breaks = {
    large: 1200,
    tablet: 768,
    phone: 480,
}

export const naviconWidth = '40px';
export const navBreak = breaks.tablet;

export const functions = {
    phoneBreak: (styles) => {
        return `
            @media (min-width: ${breaks.phone}px) {
                ${styles}
            }
        `
    },
    
    tabletBreak: (styles) => {
        return `
            @media (min-width: ${breaks.tablet}px) {
                ${styles}
            }
        `
    },
    desktopBreak: (styles) => {
        return `
            @media (min-width: ${breaks.desktop}px) {
                ${styles}
            }
        `
    },
    desktopLargeBreak: (styles) => {
        return `
            @media (min-width: ${breaks.large}px) {
                ${styles}
            }
        `
    }
}

export const padding = '1rem';

export const containers = {
    container: () => {
        return `
            padding-left: 1rem;
            padding-right: 1rem;
        `;
    },
    readable: () => {
        return `
            max-width: 70rem;
            margin-left: auto;
            margin-right: auto;
        `;
    }
}