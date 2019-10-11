import React, { useContext } from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { arrows, breaks, colors, overlays, padding, theme, transition } from '../config/styles'

import { GalleryContext } from '../templates/portfolio-item';

const PortfolioGallery = (props) => {

    const context = useContext(GalleryContext);

    let color = {
        color: props.color,
    };

    const handleNext = () => {
        context.setMode('button')
        if (context.current + 1 === context.portfolioItems.length) {
            context.setCurrent(0);    
        } else (
            context.setCurrent(context.current + 1)
        )
    }

    const handlePrevious = () => {
        context.setMode('button')
        if (context.current - 1 < 0) {
            context.setCurrent(context.portfolioItems.length - 1);    
        } else (
            context.setCurrent(context.current - 1)
        )
    }

    // TODO: touch based swipe

    return (
        <GalleryContext.Consumer>
            {({ current }) => (
                <TransitionGroup className={`portfolio-gallery ${props.className}`} style={color}>
                        {props.slides.map((slide, index) => {
                            return (
                                index === current ?
                                <CSSTransition
                                    key={index}
                                    classNames="fade"
                                    timeout={200}
                                >
                                    <Img key={index} outerWrapperClassName="test" 
                                        sizes={slide} 
                                        alt={slide.alt}
                                    />
                                </CSSTransition>
                                : null
                            )
                        })}
                    <button className="button button-next" onClick={handleNext} />
                    <button className="button button-previous" onClick={handlePrevious} />
                </TransitionGroup>   
            )}
        </GalleryContext.Consumer>
    )
}

// TODO: final styles

const StyledPortfolioGallery = styled(PortfolioGallery)`
    padding: 0;
    margin: 0;
    background-color: ${theme.highlight};
    position: relative;
    ${overlays.pixels}
    overflow: hidden;
    &:before {
        opacity: .5;
    }
    .button {
        border: 0;
        ${arrows()}
        cursor: pointer;
        padding: calc(.75*${padding}) 0;
        width: calc(3*${padding});
        background-color: ${colors.grayDark};
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 25;
        display: none;
        color: ${colors.white};
        cursor: pointer;
        &:before {
            right: calc(1.5*${padding});
        }
        &:after {
            right: 0;
            left: calc(1.5*${padding});
        }
        ${breaks.phone(`
            display: flex;
        `)}
        &-previous {
            bottom: 0;
            left: 0;
            transform: rotate(180deg);
        }
        &-next {
            bottom: 0;
            right: 0;
        }
    }
    /* this feels like a lot of work for responsive images :/ */
    .gatsby-image-wrapper {
        height: calc(100% - 4*${padding});
        width: calc(100% - 4*${padding});
        margin: calc(2*${padding});
        img {
            object-fit: contain !important;
        }
        /* TODO abstract this somehow */
        overflow: hidden;
        transition: ${transition}ms;
        &.fade-enter {
            opacity: 0;
        }
        &.fade-enter-active {
            opacity: 1;
        }
        &.fade-exit {
            opacity: 1;
        }
        &.fade-exit-active {
            opacity: 0;
        }
    }
`

export default StyledPortfolioGallery;