import React from 'react'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'

import styled from 'styled-components'
import { arrows, colors, functions, overlays, padding } from '../config/styles'

export default class PortfolioGallery extends React.Component {
	render() {

        let params

		if (this.props.slides.length > 1) {
			params = {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			}
		} else {
			params = {
				loop: false,
			}
		}

		var color = {
			color: this.props.color,
		};

		return (
			<StyledPortfolioGallery className="portfolio-gallery" style={color}>
				<Swiper {...params}>
					{this.props.slides.map(({ slide, slidetype }, index) => (
						<div key={index}>
                            <Img outerWrapperClassName="image" 
                                sizes={slide[0].image.childImageSharp.sizes} 
                                alt={slide[0].image.alt}
                            />
						</div>
					))}
				</Swiper>
			</StyledPortfolioGallery>
		)
	}
}

const StyledPortfolioGallery = styled.div`
    padding: 0;
    margin: 0;
    background-color: currentColor;
    position: relative;
    ${overlays.pixels}

    &:before {
        opacity: .5;
    }

    .swiper {
        &-container {
            cursor: grab;
            height: 100%;
            position: relative;
            z-index: 3;
            overflow: hidden;
        }
        
        &-wrapper {
            height: 100%;
            width: 100%;
        }

        &-slide {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            /* this feels like a lot of work for responsive images :/ */
            .gatsby-image {
                background: red;

                &-outer-wrapper {
                    padding: 3.125rem;
                    padding-bottom: 6.25rem;
                    width: 100%;
                    height: 100%;
                }

                &-wrapper {
                    height: 100%;
                    width: 100%;

                    img {
                        object-fit: contain !important;
                    }
                }
            }
        }

        &-button {

            &-prev, &-next {
                ${arrows()}
                cursor: pointer;
                padding: ${padding} 0;
                width: calc(6*${padding});
                background-color: ${colors.darkGray};
                justify-content: center;
                align-items: center;
                position: absolute;
                z-index: 25;
                height: calc(3*${padding});
                display: none;
                color: ${colors.white};

                &:before {
                    right: calc(3*${padding});
                }

                &:after {
                    rigth: 0;
                    left: calc(3*${padding});
                }

                ${functions.phoneBreak(`
                    display: flex;
                `)}
            }

            &-prev {
                bottom: 0;
                left: 0;
                transform: rotate(180deg);
            }

            &-next {
                bottom: 0;
                right: 0;
            }
        }

        &-pagination {
            height: ${padding};
            width: auto;
            position: absolute;
            bottom: ${padding};
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
            display: flex;
            justify-content: center;
            align-items: center;

            &-bullet {
                display: block;
                cursor: pointer;
                background-color: ${colors.gray};
                height: .5em;
                width: .5em;
                padding: .5em;
                margin: 0 .5em;
                border-radius: 50%;

                &-active {
                    background-color: ${colors.white};
                }
            }
        }
    }

    /* swiper vendor styles */
    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        /* Fix of Webkit flickering */
        z-index: 1;
    }

    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
    }

    .swiper-slide,
    .swiper-wrapper {
        transform: translate3d(0px, 0, 0);
    }

    .swiper-slide {
        /* -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto; */
        flex-shrink: 0;
        width: 100%;
        position: relative;
    }

    /* a11y */
    .swiper-container .swiper-notification {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
    }

    /* IE10 Windows Phone 8 Fixes */
    .swiper-wp8-horizontal {
        touch-action: pan-y;
    }
    .swiper-wp8-vertical {
        touch-action: pan-x;
    }

    /* Pagination Styles */
    .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: 300ms;
        transform: translate3d(0, 0, 0);
        z-index: 10;
    }
    .swiper-pagination.swiper-pagination-hidden {
        opacity: 0;
    }

    /* Common Styles */
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
        left: 0;
        width: 100%;
    }

    /* Bullets */
    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        display: inline-block;
        /* background: #000; */
        opacity: 0.5;
    }
    button.swiper-pagination-bullet {
        border: none;
        margin: 0;
        padding: 0;
        box-shadow: none;
        appearance: none;
    }
    .swiper-pagination-clickable .swiper-pagination-bullet {
        cursor: pointer;
    }
    .swiper-pagination-white .swiper-pagination-bullet {
        /* background: #fff; */
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        /* background: #007aff; */
    }
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 5px;
    }

    /* Progress */
    .swiper-pagination-progress {
        background: rgba(0, 0, 0, 0.25);
        position: absolute;
    }
    .swiper-pagination-progress .swiper-pagination-progressbar {
        background: #007aff;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scale(0);
        transform-origin: left top;
    }
    .swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
        transform-origin: right top;
    }
    .swiper-container-horizontal > .swiper-pagination-progress {
        width: 100%;
        height: 4px;
        left: 0;
        top: 0;
    }

    /* Preloader */
    .swiper-lazy-preloader {
        width: 42px;
        height: 42px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -21px;
        margin-top: -21px;
        z-index: 10;
        transform-origin: 50%;
        animation: swiper-preloader-spin 1s steps(12, end) infinite;
    }
    .swiper-lazy-preloader:after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
        background-position: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .swiper-lazy-preloader-white:after {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    }
    @keyframes swiper-preloader-spin {
        100% {
        transform: rotate(360deg);
        }
    }
`
