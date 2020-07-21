import React from 'react';
import FooterNavLink from './FooterNavLink';

export default function FooterNav(props) {
    const FOOTER_LINKS = [
        {link: "/", label: "Home"},
        {link: "/about", label: "About"},
        {link: "/contact", label: "Contact"},
        {link: "https://www1.nyc.gov/home/privacy-policy.page", label: "Privacy Policy"},
        {link: "https://www1.nyc.gov/home/terms-of-use.page", label: "Terms of Use"}
    ]

    const footerNavLinks = FOOTER_LINKS.map((item) => <FooterNavLink link={item.link} label={item.label}/>);

    return (
        <div class="usa-footer__primary-section">
            <nav class="usa-footer__nav" aria-label="Footer navigation">
                <ul class="grid-row grid-gap">
                    {footerNavLinks}
                </ul>
            </nav>
    </div>  
    );
}