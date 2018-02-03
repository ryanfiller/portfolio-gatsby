import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
    <footer className="footer">
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
    </footer>
)

export default Footer
