import { lighten, transparentize } from 'polished'

export const colors = {
    white: '#fff7ff',
    black: '#1e053f',
    orange: '#ed6554',
    blue: '#192368',
    purple: '#7c1863',
    grayLight: lighten(.30, '#2f323a'),
    gray: lighten(.15, '#2f323a'),
    grayDark: '#2f323a',
}

export const theme = {
    dark: colors.black,
    light: colors.white,
    primary: colors.blue,
    active: colors.orange,
    highlight: colors.purple,
    disabled: colors.gray,
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
        background-color: ${transparentize(.5, colors.grayDark)};
        @supports (mix-blend-mode: multiply) {
            background-color: ${colors.gray};
            mix-blend-mode: multiply;
        }
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

export const arrows = (direction='right') => {

    return`
        position: relative;
        padding-right: 1.25em;
        
        &:before, &:after {
            content: '';
            display: block;
            width: 0; 
            height: 0; 
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-top: .4em solid transparent;
            border-bottom: .4em solid transparent;
            border-left: .4em solid currentColor;
        }
    
        &:before {
            right: .5em;
        }
    
        &:after {
            right: 0;
        }

        ${direction === 'left' ? `
            padding-right: 0;
            padding-left: 1.25em;

            &:before, &:after {
                transform: translateY(-50%) rotate(180deg);
            }

            &:before {
                left: .5em;
            }
        
            &:after {
                left: 0;
            }
        ` : null}
    `
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
    },

    inlineLink: (direction='right') => {
        return`
            text-transform: uppercase;
            text-decoration: none;
            position: relative;
            padding-right: 1.25em;
            ${arrows(direction)}
        `
    },

    sizes: (small, medium, large) => {
        return `
            @media (min-width: ${breaksPoints.phone}px) {
                font-size: ${small}
            }
            @media (min-width: ${breaksPoints.tablet}px) {
                font-size: ${medium}
            }
            @media (min-width: ${breaksPoints.desktop}px) {
                font-size: ${large}
            }
        `
    }
}

export const transition = '.3s';

export const breaksPoints = {
    large: 1200,
    tablet: 768,
    phone: 480, 
}

export const naviconWidth = '40px';
export const navBreak = breaksPoints.tablet;

export const breaks = {
    phone: (styles) => {
        return `
            @media (min-width: ${breaksPoints.phone}px) {
                ${styles}
            }
        `
    },
    
    tablet: (styles) => {
        return `
            @media (min-width: ${breaksPoints.tablet}px) {
                ${styles}
            }
        `
    },
    
    desktop: (styles) => {
        return `
            @media (min-width: ${breaksPoints.desktop}px) {
                ${styles}
            }
        `
    },

    desktopLarge: (styles) => {
        return `
            @media (min-width: ${breaksPoints.large}px) {
                ${styles}
            }
        `
    }
}

export const padding = '2rem';

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

function glitchAnimation() {

    var array = []
    
    for (var i = 0; i <= 20; i++) { 

        var random1 = Math.floor(Math.random() * 100) + 1
        var random2 = Math.floor(Math.random() * 100) + 1

        array.push(`
            ${i * 5}% {
                clip: rect(${random1}px,9999px,${random2}px,0);
            }
        `)
    }

    return array.join("");
};

export const animations = {

    glitch: (color, background) => {
        color = color || colors.black
        background = background || colors.white
        return `
            color: ${color};
            position: relative;

            @keyframes noise1 {
                ${glitchAnimation()}
            }

            @keyframes noise2 {
                ${glitchAnimation()}
            }

            &:before, &:after {
                pointer-events: none;
                content: attr(data-text);
                position: absolute;
                top: 0;
                color: ${color};
                background: ${background};
                overflow: hidden;
                clip: rect(0,900px,0,0);
            }
        
            &:before {
                left: -1px;
                animation: noise2 2s infinite linear alternate-reverse;
            }
        
            &:after {
                left: 1px;
                animation: noise1 4s infinite linear alternate-reverse;
            }
        `
    },

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

    bounce: () => {
        return`
            animation-name: floating;
            animation-duration: ${transition};
            animation-timing-function: steps(2, end);
            animation-iteration-count: infinite;
            position: relative;
            
            @keyframes floating {
                from { top: 0; }
                50%  { top: -.25rem; }
                to   { top: 0; }    
            }
        `
    }
}