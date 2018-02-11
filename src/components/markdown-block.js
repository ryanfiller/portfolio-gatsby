import React, { Component } from 'react';

export default class MarkdownBlock extends Component {
    render() {
        return (
            <div className="markdown" dangerouslySetInnerHTML={{ __html: this.props.post }} />
        )
    }
}