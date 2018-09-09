import React, { Component } from 'react'
// TODO
// hooks up links for meta content
// import Link from 'gatsby-link'

import styled from 'styled-components'

import { fonts, padding } from '../config/styles'

export default class ContentMeta extends Component {
  render() {

    let tags;
    if(this.props.tags != null){
        tags = this.props.tags.map((name, index) => {
            return <span key={ index }>{name}</span>;
        })
    }

    let categories;
    if(this.props.category != null){
        categories = this.props.category.map((name, index) => {
            return <span key={ index }>{name}</span>;
        })
    }

    return (
        <StyledMeta className="meta">
            {
                this.props.date ?
                <div className="date">
                    {this.props.date}  
                </div>
                : ''
            }
            <div className="category">
                {categories}  
            </div>
            <div className="tag">
                {tags}
            </div>
        </StyledMeta>
    )
  }
}

const StyledMeta = styled.div`
    margin: calc(${padding}/4) 0;
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