import React from 'react';
import FooterNavLink from './FooterNavLink';

import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n/config';

export default function FooterNav(props) {
    const { i18n, t } = useTranslation();

    const FOOTER_LINKS = [
        {link: "/", label: t('home')},
        {link: "/about", label: t('about')},
        {link: "/contact", label: t('contact')},
        {link: "https://www1.nyc.gov/home/privacy-policy.page", label: t('privacyPolicy')},
        {link: "https://www1.nyc.gov/home/terms-of-use.page", label: t('termsOfUse')}
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