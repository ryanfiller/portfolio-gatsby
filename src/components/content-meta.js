import React, { Component } from 'react'
import Link, { navigateTo } from 'gatsby-link'

export default class ContentMeta extends Component {
  render() {

    let tags;
    if(this.props.tags != null){
        tags = this.props.tags.map(function(name, index){
            return <span className="meta__tag" key={ index }>{name}</span>;
        })
    }

    return (
        <p className="meta">
            <span className="meta__category">
                {this.props.category}
            </span>  
            {tags}
        </p>
    )
  }
}