import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components';
import styles, { colors } from '../config/styles.js';

const Footer = styled.footer`
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    justify-conten: space-between;
    align-items: center;
    ${styles.container}
`;

const SiteFooter = () => (
    <Footer className="footer" id="footer">
        <aside className="footer-pre footer-contact">
            <header className="footer-contact__header js-expander">
                Get in Touch
            </header>
            <div className="footer-contact__container js-expandee">
            </div>
        </aside>
        <main className="footer-main">
            <a href="/" className="footer__logo">
            </a>
        </main>
        <aside className="footer-post">
            <div className="copyright">
                Copyright 2012 - { new Date().getFullYear() }
            </div>
        </aside>
    </Footer>
)

export default SiteFooter
