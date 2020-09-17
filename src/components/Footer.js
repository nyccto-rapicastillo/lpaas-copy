/**
 * The Footer component. The standard footer at the bottom of each page.
 * 
 * Props:
 *  returnBg -  the class name for the background for the "Return to Top" link (String)
 */

import React from 'react';
import {useTranslation} from 'react-i18next';
// import {LANGUAGES} from '../i18n/config';

// Import composite components
import {FooterNav, AgencyGrid} from '../components';

export default function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className={`usa-footer ${props.returnBg}`}>

      {/* Return to Top link */}
      <div className="grid-container usa-footer__return-to-top">
        <a href="#" onClick={() => window.scrollTo(0, 0)}>{t('returnToTop')}</a>
      </div>

      <FooterNav/>

      <AgencyGrid/>

    </footer>
  );
}
