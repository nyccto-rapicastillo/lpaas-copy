import React from 'react';
import NavLink from './NavLink';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

import CloseImg from '../assets/img/close-white.svg';

export default function Header(props) {
  const {i18n, t} = useTranslation();

  const NAV_LINKS = [
    {link: '/', label: t('home')},
    {link: '/about', label: t('about')},
    {link: '/contact', label: t('contact')},
  ];

  const navItems = NAV_LINKS.map((item) =>
    <NavLink
      isActive = {`${props.currentPage}` == `${item.label}`}
      link={item.link}
      label={item.label}
    />,
  );

  return (
    <div>
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--extended bg-unity-blue wrap-header">
        <div className="usa-navbar wrap-header" style={{borderBottom: "none", display: "flex", alignItems: "center"}}>
          <div className="usa-logo" id="extended-logo">
            <em className="usa-logo__text nowrap">
              <a href="/" title="Home" aria-label="Home"
                className="text-primary-darker text-barlow-logo" style={{textAlign: "left", marginLeft: -3, alignSelf: "center"}}>
                {t('fullTitle')}
              </a>
            </em>
          </div>
          <button className="usa-menu-btn">{t('menu')}</button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav bg-white mobile-menu">
          <div className="usa-nav__inner">
            <button className="usa-nav__close">
              <img src={CloseImg} role="img" alt="close"/>
            </button>
            <ul className="usa-nav__primary usa-accordion">
              {navItems}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}