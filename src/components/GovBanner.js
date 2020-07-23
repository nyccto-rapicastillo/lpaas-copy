import React from 'react';
import NYCLogo from '../assets/img/nyc.png';
import NYC from '../assets/img/nyc.svg';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

export default function GovBanner() {
  const {i18n, t} = useTranslation();

  return (
    <div>
      <a className="usa-skipnav" href="#main-content">{t('skipContent')}</a>
      <section className="usa-banner bg-primary-darker"
        aria-label="Official government website">
        <div className="usa-accordion banner-adjustment">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text text-white">
                  <a href="http://nyc.gov/">
                    <img src={NYC} style={{paddingRight: 28}}/>
                  </a> 
                  {t('topNav')}
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
}
