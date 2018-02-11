import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

import styled from 'styled-components'
import style, { colors, breaks, fonts } from '../config/styles.js';

const Meta = styled.p`
    margin: ${style.padding}/4 0;

    .meta {
        &__category {
            display: block;
            &:before {
                content: '#';
            }
        }

        &__date {
            &:after {
                content: '|';
                margin: 0 .5em;
            }
        }

        &__tag {
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

export default class ContentMeta extends Component {
  render() {

    let tags;
    if(this.props.tags != null){
        tags = this.props.tags.map(function(name, index){
            return <span className="meta__tag" key={ index }>{name}</span>;
        })
    }

    return (
        <Meta className="meta">
            <span className="meta__category">
                {this.props.category}
            </span>  
            {tags}
        </Meta>
    )
  }
}