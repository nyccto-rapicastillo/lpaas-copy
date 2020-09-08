import React from 'react';
import FooterNavLink from './FooterNavLink';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

export default function FooterNav(props) {
  const {i18n, t} = useTranslation();

  const FOOTER_LINKS = [
    {to: '/', label: t('home')},
    {to: '/about', label: t('about')},
    {to: '/contact', label: t('contact')},
    {href: 'https://www1.nyc.gov/home/privacy-policy.page', label: t('privacyPolicy')},
    {href: 'https://www1.nyc.gov/home/terms-of-use.page', label: t('termsOfUse')},
  ];

  const footerNavLinks = FOOTER_LINKS.map((item) =>
    <FooterNavLink  {...item} />);

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
