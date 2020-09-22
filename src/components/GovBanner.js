import React from 'react';
import NYCLogo from '../assets/img/nyc.png';
import NYC from '../assets/img/nyc.svg';

import {useTranslation} from 'react-i18next';
import {LANGUAGES} from '../i18n/config';

export default function GovBanner() {
  const {i18n, t} = useTranslation();

  return (
    <div class="govbanner">
      <a className="usa-skipnav" href="#main-content">{t('skipContent')}</a>
      <section className="usa-banner bg-primary-darker banner-adjustment"
        aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header" style={{paddingBottom: 15}}>
            <div className="usa-banner__inner">
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text text-white">
                  <a href="https://www1.nyc.gov/" class="usa-banner__nyc-logo">
                    <img src={NYC} alt="NYC City Logo" style={{paddingRight: 28}}/>
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
