import React, { Component } from 'react';

import styled from 'styled-components';
import styles, { colors, breaks, fonts } from '../config/styles.js';

const Markdown = styled.main`
    background-color: ${colors.orange};
`;

export default class MarkdownBlock extends Component {
    render() {
        return (
            <Markdown dangerouslySetInnerHTML={{ __html: this.props.post }} />
        )
    }
}