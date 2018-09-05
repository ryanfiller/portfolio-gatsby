import React from 'react'
import Link from 'gatsby-link'

import SocialsList from './socials'

const Footer = () => (
    <footer className="footer">
        <div className="footer__copyright">
            Copyright 2012 - { new Date().getFullYear() }, 
            Built with <a target="_blank" href="https://www.gatsbyjs.org/">GatbyJS</a> and <a target="_blank" href="https://www.netlifycms.org/">NetlifyCMS</a>
        </div>
        <SocialsList />
    </footer>
)

export default Footer
