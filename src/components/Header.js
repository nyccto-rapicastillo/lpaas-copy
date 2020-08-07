/**
 * The Header component. The standard header at the top of the page, with the title and navigation bar.
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

// Import composite components
import HeaderNav from './HeaderNav';

export default function Header(props) {
  const {i18n, t} = useTranslation();

  return (
    <div>
      <div className="usa-overlay"/>

      <header className="usa-header usa-header--extended bg-unity-blue wrap-header">

        {/* Title Container */}
        <div className="usa-navbar wrap-header" style={{borderBottom: "none", display: "flex", alignItems: "center"}}>
          
          {/* Title */}
          <div className="usa-logo" id="extended-logo">
            <em className="usa-logo__text nowrap">
              <a href="/" title="Home" aria-label="Home"
                className="text-primary-darker text-barlow-logo" style={{textAlign: "left", marginLeft: -3, marginBottom: 28}}>
                {t('fullTitle')}
              </a>
            </em>
          </div>

          <button className="usa-menu-btn">{t('menu')}</button>

        </div>

        <HeaderNav/>

      </header>
    </div>
  );
}
