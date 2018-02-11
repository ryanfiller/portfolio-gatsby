import React from 'react'
import Link from 'gatsby-link'

import Socials from './socials'


const Footer = () => (
    <footer className="footer" id="footer">
        <div className="copyright">
            Copyright 2012 - { new Date().getFullYear() }
        </div>
        <Socials />
    </footer>
)

export default Footer
