import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {FooterNav, AgencyGrid} from '../components';

export default function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className={`usa-footer ${props.returnBg}`}>

      <div className="grid-container usa-footer__return-to-top">
        <Link to="#" onClick={() => window.scrollTo(0, 0)}>{t('returnToTop')}</Link>
      </div>

      <FooterNav/>

      <AgencyGrid/>

    </footer>
  );
}
