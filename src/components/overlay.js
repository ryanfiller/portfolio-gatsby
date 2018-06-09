import React, { Component } from 'react';

import { colors } from '../config/config';

export default class Overlay extends Component {
    render() {
        return (
            <div className="page-overlay" onClick={this.props.toggleOffCanvas} />
        )
    }
}