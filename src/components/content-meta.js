import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class ContentMeta extends Component {
  render() {

    let tags;
    if(this.props.tags != null){
        tags = this.props.tags.map(function(name, index){
            return <span key={ index }>{name}</span>;
        })
    }

    let categories;
    if(this.props.category != null){
        categories = this.props.category.map(function(name, index){
            return <span key={ index }>{name}</span>;
        })
    }

    return (
        <div className="meta">
            <div className="meta__category">
                {categories}  
            </div>
            <div className="meta__tag">
                {tags}
            </div>
        </div>
    )
  }
}