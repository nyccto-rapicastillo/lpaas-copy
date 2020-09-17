/**
 * The HeaderNav component. The navigation bar associated with the header, at the top of the page.
 * 
 * Props:
 *  currentPage - indicates which page is the current page (String)
 */

import React from 'react';
import NavLink from './NavLink';

import {useTranslation} from 'react-i18next';
// import {LANGUAGES} from '../i18n/config';

import CloseImg from '../assets/img/close-white.svg';

export default function Header(props) {
  const {t} = useTranslation();

  // Information for all the links in the navigation bar
  const NAV_LINKS = [
    {link: '/', label: t('home')},
    {link: '/about', label: t('about')},
    {link: '/contact', label: t('contact')},
  ];

  // Renders each link in the navigation bar, checking if the link points to the current page
  const navItems = NAV_LINKS.map((item) =>
    <NavLink
      key={`link-${item.label}`}
      isActive = {`${props.currentPage}` === `${item.label}`}
      link={item.link}>{item.label}</NavLink>,
  );

  return (
    <nav aria-label="Primary navigation" className="usa-nav bg-white mobile-menu">
      <div className="usa-nav__inner">

        {/* Close Button */}
        <button className="usa-nav__close">
          <img src={CloseImg} alt="close"/>
        </button>

        {/* Links */}
        <ul className="usa-nav__primary usa-accordion">
          {navItems}
        </ul>

      </div>
    </nav>
  );
}
