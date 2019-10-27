import React from 'react';
import PropTypes from "prop-types";

// TODO
// hooks up links for meta content
// import Link from 'gatsby-link'

import styled from 'styled-components';
import { fonts } from '../config/styles';

const ContentMeta = (props) => {

    const {
        date,
        tags,
        category
    } = props;

    return (
        <div className={`meta ${props.className}`}>
            {
                date ?
                <div className="date">
                    {date}  
                </div>
                : null
            }
            {
                category ?
                <div className="category">
                  {category.map((name, index) => {
                        return <span key={ index }>{name}</span>;
                    })}  
                </div>              
                : null
            }
            {
                tags ?
                <div className="tag">
                    {tags.map((name, index) => {
                        return <span key={ index }>{name}</span>;
                    })}
                </div>
                : null
            }
        </div>
    )
}

ContentMeta.propTypes = {
	date: PropTypes.string,
    tags: PropTypes.array,
    category: PropTypes.array
};

const StyledContentMeta = styled(ContentMeta)`
    margin: calc(var(--padding)/4) 0;
    ${fonts.sansSerif()}

    .date {
        text-transform: uppercase;
        font-size: 1em;
        line-height: 1em;
        ${fonts.condensed()}
    }

    .category {
        span {
            &:before {
                content: '#';
            }
            &:after {
                content: ', ';
            }

            &:last-of-type:after {
                display: none;
            }
        }
    }

    .tag {
        span {
            &:before {
                content: '#';
            }
            &:after {
                content: ', ';
            }

            &:last-of-type:after {
                display: none;
            }
        }
    }
`

export default StyledContentMeta;