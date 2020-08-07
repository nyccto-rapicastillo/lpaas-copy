/**
 * The FooterNav component. The navigation bar at the top of the footer, with links to each page and other important city government pages.
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

// Import composite componentss
import FooterNavLink from './FooterNavLink';

export default function FooterNav(props) {
  const {i18n, t} = useTranslation();

  // Information for all the links in the nav
  const FOOTER_LINKS = [
    {link: '/', label: t('home')},
    {link: '/about', label: t('about')},
    {link: '/contact', label: t('contact')},
    {link: 'https://www1.nyc.gov/home/privacy-policy.page', label: t('privacyPolicy')},
    {link: 'https://www1.nyc.gov/home/terms-of-use.page', label: t('termsOfUse')},
  ];

  // Renders each link
  const footerNavLinks = FOOTER_LINKS.map((item) =>
    <FooterNavLink link={item.link}>{item.label}</FooterNavLink>);

  return (
    <div className="usa-footer__primary-section">
      <nav className="usa-footer__nav" aria-label="Footer navigation">
        <ul className="grid-row grid-gap">
          {footerNavLinks}
        </ul>
      </nav>
    </div>
  );
}
