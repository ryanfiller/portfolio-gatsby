import React, { Component } from 'react'
import Link from 'gatsby-link'

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
        <div className="meta">
            {
                this.props.date ?
                <div className="meta__date">
                    {this.props.date}  
                </div>
                : ''
            }
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