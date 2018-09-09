import { lighten, darken, transparentize } from 'polished'

export const colors = {
    blue: '#3f7cac',
    orange: '#f89c7d',
    white: '#fcfaf6',
    black: '#1e2223',
    gray: lighten(.10, '#1e2223'),
    lightGray: lighten(.25, '#1e2223'),
    darkGray: darken(.05, '#1e2223'),
    
    r: 'rgba(255, 0, 0, .25)',
    g: 'rgba(0, 255, 0, .25)',
    b: 'rgba(0, 0, 255, .25)',
}

var pixelSize = '.25rem'
var pixels = '/images/site-assets/screendoor.png'
var rgb = `
    repeating-linear-gradient(
        to bottom,
        ${colors.r} calc(0*${pixelSize}), ${colors.r} calc(1*${pixelSize}),
        ${colors.g} calc(1*${pixelSize}), ${colors.g} calc(2*${pixelSize}),
        ${colors.b} calc(2*${pixelSize}), ${colors.b} calc(3*${pixelSize})
    );
`
var overlay = (styles) => {
    return `
        position: relative;
            
        > * {
            position: relative; 
            z-index: 2;
        }

        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: 1;
            ${styles}
        }
    `;
}

export const overlays = {

    dark: overlay(`
        background-color: transparentize(.5, ${colors.darkGray});
    `),

    pixels: overlay(`
        background-image: url(${pixels});
        background-size: ${pixelSize};
    `),

    rgb: overlay(`
        background-image: ${rgb};
        background-size: ${pixelSize};
    `),

    rgbPixels: overlay(`
        background-image: url(${pixels}), ${rgb};
        background-size: ${pixelSize};
    `),

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

export const animations = {

    highlight: (color, hoverColor, backgroundColor) => {
        color = color || 'current-color'
        hoverColor = hoverColor || 'current-color'
        backgroundColor = backgroundColor || colors.orange
        return `
            color: ${color};
            transition: color ${transition}, background ${transition};
            background-image: linear-gradient(to right, transparent 51%, ${backgroundColor} 49%);
            background-position: 0;
            background-size: 200%;
        
            &:hover {
                color: ${hoverColor};
                background-image: linear-gradient(to right, transparent 50%, ${backgroundColor} 50%);
                background-position: -100%;
            }
        `
    },
}